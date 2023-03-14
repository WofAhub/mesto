import '../style/index.css';

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
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, cardsContainer);

// генерация одной карточки c функцией открытия большой картинки
const createCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: ".elements-template",
    handleCardClick: (link, name) => {
      popupImage.open(link, name);
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// экземпляр Юзера                                                                      // ПРОФИЛЬ
const newUserInfo = new UserInfo({
  nameUser: profileName,
  descriptionUser: profileDescription
});

// сохранить изменения в попапе Профиля
const submitProfile = (inputValues) => {
  newUserInfo.setUserInfo(inputValues);
}

// открыть попап Профиля
buttonEdit.addEventListener("click", () => {
  popupEditProfile.open();
  const data = newUserInfo.getUserInfo();
  
  nameEdit.value = data.name;
  descriptionEdit.value = data.description;

  formValidatorProfile.resetValidation();
});

// экземпляр попапа Профиля с сохранением
const popupEditProfile = new PopupWithForm(popUpEdit, submitProfile);
popupEditProfile.setEventListeners();
   
// открыть попап Добавления                                                             // ДОБАВЛЕНИЕ
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  formAdd.reset();
  formValidatorInputsForm.resetValidation();
})

// принять изменения в попапе Добавления
const submitAddCardForm = (data) => {
  cardsList.addItemPrepend(createCard({
    name: data.name,
    link: data.link
  }));
}

// экземпляр попапа Добавления с сохранением
const popupAddCard = new PopupWithForm(popUpAdd, submitAddCardForm);
popupAddCard.setEventListeners();

// подключение валидации к попапу Профиля                                               // ВАЛИДАЦИЯ
const formValidatorProfile = new FormValidator(formStuff, formEdit);
formValidatorProfile.enableValidation();

// подключение валидации к попапу Добавления
const formValidatorInputsForm = new FormValidator(formStuff, formAdd);
formValidatorInputsForm.enableValidation();

// экземпляр попапа Изображений
const popupImage = new PopupWithImage(popUpImg);
popupImage.setEventListeners();

cardsList.renderItems();                                                                 // ВЫЗОВ ГЕНЕРАЦИИ КАРТОЧЕК