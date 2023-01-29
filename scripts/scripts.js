// ПЕРЕМЕННЫЕ

// блок-содержимое profile                                 // ПРОФИЛЬ
const profileInfo = document.querySelector(".profile__info");                        
const profileName = profileInfo.querySelector(".profile__name");                                 // имя профиля
const profileDescription = profileInfo.querySelector(".profile__description");                   // описание профиля


// попап-содержимое popUpEdit                              // ПОПАП РЕДКТИРОВАНИЯ
const popUpEdit = document.querySelector(".pop-up_type_profile-edit");                           // главный попап редактирования
const nameEdit = popUpEdit.querySelector(".pop-up__input_type_profile-name");                    // имя
const descriptionEdit = popUpEdit.querySelector(".pop-up__input_type_profile-description");      // описание
const formEdit = popUpEdit.querySelector(".pop-up__form_type_edit");                             // форма

// попап-содержимое popUpAdd                               // ПОПАП ДОБАВЛЕНИЯ
const popUpAdd = document.querySelector(".pop-up_type_card-add");                                // главный попап добавления
const nameAdd = popUpAdd.querySelector(".pop-up__input_type_img-name");                          // имя
const urlAdd = popUpAdd.querySelector(".pop-up__input_type_img-url");                            // ссылка
const popUpAddForm = popUpAdd.querySelector(".pop-up__form_type_add");                           // форма

// попап-содержимое popUpImg                               // ПОПАП ИЗОБРАЖЕНИЯ
const popUpImg = document.querySelector(".pop-up_type_img");                                     // главный попап изображения
const popUpImgContainer = popUpImg.querySelector(".pop-up__img-container");                      // контейнер попапа изображения
const popUpImgImg = popUpImg.querySelector(".pop-up__img");                                      // изображение попапа
const popImgCaption = popUpImg.querySelector(".pop-up__img-caption");                            // подпись к изображению

// редактировать и добавить                                // КНОПКИ    
const buttonEdit = document.querySelector(".button_type_edit-button");                           // кнопка редактирования
const buttonAdd = document.querySelector(".button_type_add-button");                             // кнопка добавления
const esc = "Escape";                                                                            // кнопка esc


// ФУНКЦИИ

// активация попапов
function openPopUp(popup) {
  popup.classList.add("pop-up_type_active");
  document.addEventListener('keydown', closePopUpByEsc);
  popup.addEventListener('click', closePopUpByOverlay);
  popup.addEventListener('click', closePopUpByButtonClose);
};

// дизактивация попапов
function closePopUp(popup) {
  popup.classList.remove("pop-up_type_active");
  document.removeEventListener('keydown', closePopUpByEsc);
  popup.removeEventListener('click', closePopUpByOverlay);
  popup.removeEventListener('click', closePopUpByButtonClose);
};

// дизактивация попапов с помощью Esc
function closePopUpByEsc(evt) {
  if(evt.key === esc) {
    const popUpActive = document.querySelector('.pop-up_type_active');
    closePopUp(popUpActive);
  }
}

// дизактивация попапов с помощью оверлей
function closePopUpByOverlay(evt) {
  if (evt.target.classList.contains('pop-up_type_overlay')) {
    const popUpActive = document.querySelector('.pop-up_type_active');
    closePopUp(popUpActive);
  }
}

// дизактивация попапов с помощью крестика
function closePopUpByButtonClose(evt) {
  if (evt.target.classList.contains('button_type_close-button')) {
    const popUpActive = document.querySelector('.pop-up_type_active');
    closePopUp(popUpActive);
  }
}


// активация попапа редактирования                         // ПОПАП РЕДКТИРОВАНИЯ
buttonEdit.addEventListener("click", () => {
  openPopUp(popUpEdit);
  nameEdit.value = profileName.textContent;
  descriptionEdit.value = profileDescription.textContent;
  resetValidation(popUpEdit, formStuff);
});

// сохранение информации в попапе редактирования
function saveProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profileDescription.textContent = descriptionEdit.value;

  formEdit.reset();

  closePopUp(popUpEdit);
}

// слушатель сохранения в попапе редактирования
formEdit.addEventListener("submit", saveProfileInfo);


// активация попапа добавления                             // ПОПАП ДОБАВЛЕНИЯ
buttonAdd.addEventListener("click", () => {
  openPopUp(popUpAdd);
  popUpAddForm.reset();
  resetValidation(popUpAdd, formStuff);
});

// слушатель добавления карточки с помощью попапа добавления
popUpAddForm.addEventListener("submit", submitCreateNewCard);

 
// рендер карточек                                         // ПОПАП ИЗОБРАЖЕНИЯ 
function renderCards(){
  initialCards.forEach(item => {
    const cardHTML = createCard(item);

    cardsContainer.append(cardHTML);
  });
}

renderCards();
enableValidation();