// const elements, elements-template
const cardsContainer = document.querySelector(".elements");
const elementsTemplate = document.querySelector("#elements-template")
.content
.querySelector(".element");



// создание карточек
function createCard(element){
  const card = elementsTemplate.cloneNode(true);

  const elementImg = card.querySelector(".element__img");
  elementImg.src = element.link;
  elementImg.alt = element.name;
  const elementTitle = card.querySelector(".element__title");
  elementTitle.textContent = element.name;

  // удалить карточку
  const deleteButton = card.querySelector(".button_type_delete-button")
  .addEventListener("click", function() {
    card.remove();
  });

  // лайкнуть карточку
  const likeButton = card.querySelector(".button_type_like-button")
  .addEventListener("click", function(evt){
    const evtTarget = evt.target;
  evt.target.classList.toggle("button_type_liked-button");
  });

  // открыть карточку
  const openImgButton = card.querySelector(".element__img")
  .addEventListener("click", function(){
    popUpImgImg.src = element.link;
    popUpImgImg.alt = element.name;
    popImgCaption.textContent = element.name;

    openPopUp(popUpImg);
  });
    
  return card;
}


// добавить карточку
function submitCreateNewCard(evt) {
  evt.preventDefault();
  const popUpImgName = popUpAddForm.querySelector(".pop-up__input_type_img-name").value;
  const popUpLinkUrl = popUpAddForm.querySelector(".pop-up__input_type_img-url").value;
  const element = createCard({name: popUpImgName, link: popUpLinkUrl});
  cardsContainer.prepend(element);
  closePopUp(popUpAdd);
    
  popUpAddForm.reset();
}