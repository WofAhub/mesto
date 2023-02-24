// ПЕРЕМЕННЫЕ

// место для карт    
export const cardsContainer = document.querySelector(".elements");

// блок-содержимое profile                                 // ПРОФИЛЬ
export const profileInfo = document.querySelector(".profile__info");                                    // главный блок профиля   
export const profileName = profileInfo.querySelector(".profile__name");                                 // имя профиля
export const profileDescription = profileInfo.querySelector(".profile__description");                   // описание профиля


// попап-содержимое popUpEdit                              // ПОПАП РЕДКТИРОВАНИЯ
export const popUpEdit = document.querySelector(".pop-up_type_profile-edit");                           // главный попап редактирования
export const formEdit = document.forms["pop-up-form"];                                                  // форма
export const nameEdit = popUpEdit.querySelector(".pop-up__input_type_profile-name");                    // имя
export const descriptionEdit = popUpEdit.querySelector(".pop-up__input_type_profile-description");      // описание

// попап-содержимое popUpAdd                               // ПОПАП ДОБАВЛЕНИЯ
export const popUpAdd = document.querySelector(".pop-up_type_card-add");                                // главный попап добавления
export const formAdd = document.forms["pop-up-form-add"];                                               // форма
export const popUpImgName = formAdd.querySelector(".pop-up__input_type_img-name");                      //название изображения 
export const popUpLinkUrl = formAdd.querySelector(".pop-up__input_type_img-url");                       //ссылка

// попап-содержимое popUpImg                               // ПОПАП ИЗОБРАЖЕНИЯ
export const popUpImg = document.querySelector(".pop-up_type_img");                                     // главный попап изображения
export const popUpImgImg = popUpImg.querySelector(".pop-up__img");                                      // изображение попапа
export const popImgCaption = popUpImg.querySelector(".pop-up__img-caption");                            // подпись к изображению

// редактировать и добавить                                // КНОПКИ    
export const buttonEdit = document.querySelector(".button_type_edit-button");                           // кнопка редактирования
export const buttonAdd = document.querySelector(".button_type_add-button");                             // кнопка добавления
export const esc = "Escape";                                                                            // кнопка esc


// КАРТОЧКИ

export const initialCards = [
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



// ВАЛИДАЦИЯ

export const formStuff = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  fieldSet: '.pop-up__fieldset',
  submitButtonSelector: '.button_popup-style_valid',
  inactiveButtonClass: 'button_popup-style_invalid',
  inputErrorClass: 'pop-up__input_type_error-border',
  errorClass: 'pop-up__input-errormessage_active',
};