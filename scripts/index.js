// ИМПОРТЫ

import { 
  cardsContainer,  
  profileName, 
  profileDescription, 
  popUpEdit,
  popUpAdd,
  popUpAddForm,
  nameEdit,
  descriptionEdit,
  formEdit,
  buttonEdit,
  buttonAdd,
  esc,
  initialCards,
  formStuff,
  popUpImgImg,
  popImgCaption,
  popUpImg,
  popUpImgName,
  popUpLinkUrl
} from "./data.js";

import FormValidate from "./validate.js";
import Card from "./card.js";


// ФУНКЦИИ

// генерация карточек                                      // ГЕНЕРАЦИЯ КАРТОЧЕК
function generateCardInCardsContainer() {
  initialCards.forEach((item) => {
    const newCard = new Card(item, '.elements-template');
    const cardElement = newCard.generateCard();
  
    cardsContainer.append(cardElement);
  });
}

// подключение валидации к попапу Редактирования
const formValidatorProfile = new FormValidate(formStuff, formEdit);
formValidatorProfile.enableValidation();

// подключение валидации к попапу Добавления
const formValidatorInputsForm = new FormValidate(formStuff, popUpAddForm);
formValidatorInputsForm.enableValidation();

// активация попапов
function openPopUp(popup) {
  popup.classList.add("pop-up_type_active");
  document.addEventListener('keydown', closePopUpByEsc);
  popup.addEventListener('click', closePopUpByOverlay);
  popup.addEventListener('click', closePopUpByButtonClose);
}

// дизактивация попапов
function closePopUp(popup) {
  popup.classList.remove("pop-up_type_active");
  document.removeEventListener('keydown', closePopUpByEsc);
  popup.removeEventListener('click', closePopUpByOverlay);
  popup.removeEventListener('click', closePopUpByButtonClose);
}

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
  // resetValidation(popUpEdit);
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
  // resetValidation(popUpAdd);
});

// активация попапа с изображением                         // ПОПАП ИЗОБРАЖЕНИЯ
export default function openPopUpImg(name, link) {
  popUpImgImg.src = link;
  popUpImgImg.alt = name;
  popImgCaption.textContent = name;

  openPopUp(popUpImg);
}

// добавить карточку                                       // ДОБАВИТЬ КАРТОЧКУ
function submitCreateNewCard(evt) {
  evt.preventDefault();
  const newCardAdd = generateCardInCardsContainer({
    name: popUpImgName.value, 
    link: popUpLinkUrl.value
  });

  cardsContainer.prepend(newCardAdd);   
  closePopUp(popUpAdd);
  popUpAddForm.reset();
}

// слушатель добавления карточки с помощью попапа добавления
popUpAddForm.addEventListener("submit", submitCreateNewCard);


generateCardInCardsContainer();                            // ГЕНЕРАЦИЯ КАРТОЧЕК И ВАЛИДАЦИЯ
// enableValidation();