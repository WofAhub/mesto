// импорты из components                                                                // ИМПОРТЫ
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

// импорт из data
import { 
  buttonEdit,
  buttonAdd,
  cardsContainer,
  formAdd,
  formEdit,
  formStuff,
  initialCards,
  nameEdit,
  descriptionEdit,
  popUpEdit,
  popUpAdd,
  popUpImg,
  profileName,
  profileDescription,
} from "../utils/data.js";


// ФУНКЦИИ

// генерация карточек                                                                   // ГЕНЕРАЦИЯ КАРТОЧЕК
const cardsGen = new Section({
  data: initialCards,
  renderer: (item) => {
    cardsGen.addItem(createCard(item));
  },
}, cardsContainer);

// генерация одной карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: '.elements-template',
    handleCardClick: (link, name) => {
      newPopupImg.open(link, name, popUpImg);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// попап изображения                                                                    // ЭКЗЕМПЛЯР ИЗОБРАЖЕНИЯ
const newPopupImg = new PopupWithImage(popUpImg);
newPopupImg.setEventListeners();

























// const newCardAdd = new PopupWithForm({
//   popupSelector: popUpAdd,
//   formSubmit: (formData) => {
//     cardsGen.addItem(createCard(formData));
//     newCardAdd.close();
//   }
// });

// newCardAdd.setEventListeners();

// buttonAdd.addEventListener("click", () => {
//   newCardAdd.open()
// });


// // экземпляр валидации на попапе Профиля                                         // ЭКЗЕМПЛЯРЫ ПРОФИЛЯ
// const formValidatorProfile = new FormValidator(formStuff, formEdit);
// formValidatorProfile.enableValidation();

// // экземпляр попапа Профиля
// function openPopupAdd () {
//   newPopupWithFormProfile.open();
//   newPopupWithFormProfile.setEventListeners();
// }
// const newPopupWithFormProfile = new PopupWithForm(popUpAdd);

// // экземпляр валидации на попапе Добавления                                      // ЭКЗЕМПЛЯРЫ ДОбАВЛЕНИЯ
// const formValidatorAdd = new FormValidator(formStuff, formAdd);
// formValidatorAdd.enableValidation();

// // экземпляр попапа Добавления
// const popupWithFormAdd = new PopupWithForm(popUpAdd);
// popupWithFormAdd.setEventListeners();

// // экземпляр-функция попапа Добавления
// buttonAdd.addEventListener("click", openPopupAdd);


// const userInfo = new UserInfo({
//   name: profileName,
//   description: profileDescription
// });

// newCardAdd.setEventListeners();



cardsGen.renderItems();                                                          // ВЫЗОВ ГЕНЕРАЦИИ КАРТОЧЕК


































// Старый код

// экземпляр Профиля PopupWithForm                         // ЭКЗЕМПЛЯРЫ
// const profile = new PopupWithForm({
//   popupSelector: popUpEdit,
//   formSubmit: (formData) => {
//     infoUserProfile.setUserInfo(formData);
//     profile.setEventListeners();
//   }
// });

// // экземпляр Добавления PopupWithForm
// const add = new PopupWithForm({
//   popupSelector: popUpAdd,
//   formSubmit: (formData) => {
//     cardsGen.addItem(createCard(formData));
//     add.setEventListeners();
//   }
// });

// // экземпляр данных в попапе Редактирования
// const infoUserProfile = new UserInfo({
//   name: profileName,
//   description: profileDescription
// });

// // экземпляр валидации на попапе Редактирования
// const formValidatorProfile = new FormValidator(formStuff, formEdit);
// formValidatorProfile.enableValidation();

// // экземпляр валидации на попапе Добавления
// const formValidatorAdd = new FormValidator(formStuff, formAdd);
// formValidatorAdd.enableValidation();

// // экземпляр попапа Большого изображения
// const popupImgOpen = new PopupWithImage(popUpImg);
// popupImgOpen.setEventListeners();


// // активация попапа Редактирвоания                         // ПОПАПЫ
// buttonEdit.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   profile.open();
//   const data = infoUserProfile.getUserInfo();
//   nameEdit.value = data.name;
//   descriptionEdit.value = data.description;
// });


// активация попапов                                       // ПОПАПЫ
// function openPopUp(popup) {
//   popup.classList.add("pop-up_type_active");
//   document.addEventListener('keydown', closePopUpByEsc);
//   popup.addEventListener('click', closePopUpByOverlay);
//   popup.addEventListener('click', closePopUpByButtonClose);
// }

// дизактивация попапов
// function closePopUp(popup) {
//   popup.classList.remove("pop-up_type_active");
//   document.removeEventListener('keydown', closePopUpByEsc);
//   popup.removeEventListener('click', closePopUpByOverlay);
//   popup.removeEventListener('click', closePopUpByButtonClose);
// }

// дизактивация попапов с помощью Esc
// function closePopUpByEsc(evt) {
//   if(evt.key === esc) {
//     const popUpActive = document.querySelector('.pop-up_type_active');
//     closePopUp(popUpActive);
//   }
// }

// дизактивация попапов с помощью оверлей
// function closePopUpByOverlay(evt) {
//   if (evt.target.classList.contains('pop-up_type_overlay')) {
//     closePopUp(evt.target);
//   }
// }

// дизактивация попапов с помощью крестика
// function closePopUpByButtonClose(evt) {
//   if (evt.target.classList.contains('button_type_close-button')) {
//     closePopUp(evt.currentTarget);
//   }
// }


// активация попапа редактирования                         // ПОПАП РЕДКТИРОВАНИЯ
// buttonEdit.addEventListener("click", () => {
//   newPopup.open(popUpEdit);
// });

// сохранение информации в попапе редактирования
// function saveProfileInfo(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameEdit.value;
//   profileDescription.textContent = descriptionEdit.value;

//   closePopUp(popUpEdit);
// }

// слушатель сохранения в попапе редактирования
// formEdit.addEventListener("submit", saveProfileInfo);


// активация попапа добавления                             // ПОПАП ДОБАВЛЕНИЯ
// buttonAdd.addEventListener("click", () => {
//   openPopUp(popUpAdd);

//   formAdd.reset();
//   formValidatorAdd.resetValidation();
// });


// активация попапа с изображением                         // ПОПАП ИЗОБРАЖЕНИЯ
// function handleCardClick(name, link) {
//   popUpImgImg.src = link;
//   popUpImgImg.alt = name;
//   popUpImgCaption.textContent = name;
// }


// генерация новой карточки                                // ДОБАВИТЬ КАРТОЧКУ
// function createCard(item) {
//   const newCardGen = new Card(item, '.elements-template');
//   const cardElement = newCardGen.generateCard();
//   return cardElement;
// }

// принять добавление новой карточки
// function submitCreateNewCard(evt) {
//   evt.preventDefault();

//   const newCardAdd = {
//     name: popUpImgName.value, 
//     link: popUpLinkUrl.value
//   };

//   const newCard = createCard(newCardAdd);

//   cardsContainer.prepend(newCard);   
//   closePopUp(popUpAdd);
// }

// слушатель добавления карточки с помощью попапа добавления
// formAdd.addEventListener("submit", submitCreateNewCard);