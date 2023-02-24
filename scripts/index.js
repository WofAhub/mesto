// импорт из data                                          // ИМПОРТЫ
import { 
  cardsContainer,  
  profileName, 
  profileDescription, 
  popUpEdit,
  popUpAdd,
  formAdd,
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

// импорты из validate и card
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";


// ФУНКЦИИ

// генерация карточек                                      // ГЕНЕРАЦИЯ КАРТОЧЕК
function generateCardInCardsContainer() {
  initialCards.forEach((item) => {
    cardsContainer.append(createCard(item));
  });
}

// подключение валидации к попапу Редактирования
const formValidatorProfile = new FormValidator(formStuff, formEdit);
formValidatorProfile.enableValidation();

// подключение валидации к попапу Добавления
const formValidatorInputsForm = new FormValidator(formStuff, formAdd);
formValidatorInputsForm.enableValidation();


// активация попапов                                       // ПОПАПЫ
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
    closePopUp(evt.target);
  }
}

// дизактивация попапов с помощью крестика
function closePopUpByButtonClose(evt) {
  if (evt.target.classList.contains('button_type_close-button')) {
    closePopUp(evt.currentTarget);
  }
}


// активация попапа редактирования                         // ПОПАП РЕДКТИРОВАНИЯ
buttonEdit.addEventListener("click", () => {
  openPopUp(popUpEdit);
  nameEdit.value = profileName.textContent;
  descriptionEdit.value = profileDescription.textContent;
  formValidatorProfile.resetValidation();
});

// сохранение информации в попапе редактирования
function saveProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profileDescription.textContent = descriptionEdit.value;

  closePopUp(popUpEdit);
}

// слушатель сохранения в попапе редактирования
formEdit.addEventListener("submit", saveProfileInfo);


// активация попапа добавления                             // ПОПАП ДОБАВЛЕНИЯ
buttonAdd.addEventListener("click", () => {
  openPopUp(popUpAdd);

  formAdd.reset();
  formValidatorInputsForm.resetValidation();
});


// активация попапа с изображением                         // ПОПАП ИЗОБРАЖЕНИЯ
export default function handleCardClick(name, link) {
  popUpImgImg.src = link;
  popUpImgImg.alt = name;
  popImgCaption.textContent = name;

  openPopUp(popUpImg);
}


// генерация новой карточки                                // ДОБАВИТЬ КАРТОЧКУ
function createCard(item) {
  const newCardGen = new Card(item, '.elements-template');
  const cardElement = newCardGen.generateCard();
  return cardElement;
}

// принять добавление новой карточки
function submitCreateNewCard(evt) {
  evt.preventDefault();

  const newCardAdd = {
    name: popUpImgName.value, 
    link: popUpLinkUrl.value
  };

  const newCard = createCard(newCardAdd);

  cardsContainer.prepend(newCard);   
  closePopUp(popUpAdd);
}

// слушатель добавления карточки с помощью попапа добавления
formAdd.addEventListener("submit", submitCreateNewCard);


generateCardInCardsContainer();                            // ВЫЗОВ ГЕНЕРАЦИИ КАРТОЧЕК