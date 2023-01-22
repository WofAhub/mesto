// CONST

// блок-содержимое profile                                 // ПРОФИЛЬ
const profileInfo = document.querySelector(".profile__info");                        
const profileName = profileInfo.querySelector(".profile__name");                        // имя профиля
const profileDescription = profileInfo.querySelector(".profile__description");          // описание профиля 

// попап-содержимое popUpEdit                              // ПОПАП РЕДКТИРОВАНИЯ
const popUpEdit = document.querySelector(".pop-up_type_edit");                          // главный попап редактирования
const descriptionEdit = popUpEdit.querySelector(".pop-up__edit_type_description");      // описание
const nameEdit = popUpEdit.querySelector(".pop-up__edit_type_name");                    // имя 
const formEdit = popUpEdit.querySelector(".pop-up__form_type_edit");                    // форма        

// попап-содержимое popUpAdd                               // ПОПАП ДОБАВЛЕНИЯ
const popUpAdd = document.querySelector(".pop-up_type_add");                            // главный попап добавления
const popUpAddForm = popUpAdd.querySelector(".pop-up__form_type_add");                  // форма

// попап-содержимое popUpImg                               // ПОПАП ИЗОБРАЖЕНИЯ
const popUpImg = document.querySelector(".pop-up_type_img");                            // главный попап изображения
const popUpImgContainer = popUpImg.querySelector(".pop-up__img-container");             // контейнер попапа изображения
const popUpImgImg = popUpImg.querySelector(".pop-up__img");                             // изображение попапа
const popImgCaption = popUpImg.querySelector(".pop-up__img-caption");                   // подпись к изображению 

// редактировать и добавить                                // КНОПКИ    
const buttonEdit = document.querySelector(".button_type_edit-button");                  // кнопка редактирования
const buttonAdd = document.querySelector(".button_type_add-button");                    // кнопка добавления

// закрыть
const buttonImgclose = popUpImg.querySelector(".button_type_close-button");             // закрыть попап изображения
const buttonEditclose = popUpEdit.querySelector(".button_type_close-button");           // закрыть попап редактирования
const buttonAddclose = popUpAdd.querySelector(".button_type_close-button");             // закрыть попап добавления


// FUNCTIONS

// активация попапов
function openPopUp(a) {
  a.classList.add("pop-up_type_active")
};

// дизактивация попапов
function closePopUp(b) {
  b.classList.remove("pop-up_type_active");
};


// активация попапа редактирования                         // ПОПАП РЕДКТИРОВАНИЯ
buttonEdit.addEventListener("click", () => {
  openPopUp(popUpEdit);
  nameEdit.value = profileName.textContent;
  descriptionEdit.value = profileDescription.textContent;
});

// слушатель закрытия попапа редактирования
buttonEditclose.addEventListener("click", () => {
  closePopUp(popUpEdit);
});

// сохранение информации в попапе редактирования
function saveProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profileDescription.textContent = descriptionEdit.value;

  profileName.value = "";
  profileDescription.value = "";

  closePopUp(popUpEdit);
}

// слушатель сохранения в попапе редактирования
formEdit.addEventListener("submit", saveProfileInfo);


// активация попапа добавления                             // ПОПАП ДОБАВЛЕНИЯ
buttonAdd.addEventListener("click", () => {
  openPopUp(popUpAdd);
});

// слушатель добавления карточки с помощью попапа добавления
popUpAddForm.addEventListener("submit", submitCreateNewCard);

// слушатель закрытия попапа добавления
buttonAddclose.addEventListener("click", () => {
  closePopUp(popUpAdd);
});


// дизактивация попапа изображения                         // ПОПАП ИЗОБРАЖЕНИЯ  
buttonImgclose.addEventListener("click", () => {
  closePopUp(popUpImg);
});

// рендер карточек
function renderCards(){
  initialCards.forEach(item => {
    const cardHTML = createCard(item);

    cardsContainer.append(cardHTML);
  });
}

renderCards();