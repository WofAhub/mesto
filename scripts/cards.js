const initialCards = [
  {
    name: 'Две девушки',
    link: 'https://jimmymarble.com/wp-content/uploads/2018/09/OPEN-FIELD-1014-2-768x1152.jpg'
  },
  {
    name: 'Многоручка',
    link: 'https://www.collater.al/wp-content/uploads/2018/07/I-lavori-nostalgici-e-psichedelici-di-Dana-Trippe-Collater.al-5-682x1024.jpg'
  },
  {
    name: 'Большая шляпа',
    link: 'https://jimmymarble.com/wp-content/uploads/2018/09/OPEN-FIELD-1450-920x1197.jpg'
  },
  {
    name: 'Белая роза в руках',
    link: 'https://jimmymarble.com/wp-content/uploads/2018/09/OPEN-FIELD-3249-768x1152.jpg'
  },
  {
    name: 'Девушка',
    link: 'https://jimmymarble.com/wp-content/uploads/2018/09/OPEN-FIELD-2368-768x1152.jpg'
  },
  {
    name: 'Девушка с отражением',
    link: 'https://jimmymarble.com/wp-content/uploads/2018/09/OPEN-FIELD-3137-768x1152.jpg'
  }
];

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