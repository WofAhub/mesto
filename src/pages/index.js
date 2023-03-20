import '../style/index.css';
let userId;


/* -------------- Импорты --------------- */

// импорты из components
import Api from '../components/Api.js';
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from "../components/UserInfo.js";

// импорт из data
import {
  profileAvatar, 
  buttonEdit,
  buttonAdd,
  buttonAvatar,
  cardsContainer,
  formAdd,
  formEdit,
  formStuff,
  formAvatar,
  nameEdit,
  descriptionEdit,
  popUpEdit,
  popUpAdd,
  popUpImg,
  profileName,
  popUpDelete,
  profileDescription,
  popUpAvatar
} from "../utils/data.js";


/* -------------- Api --------------- */

const api = new Api({
fetchUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
headers: {
  'Content-Type': 'application/json',
  authorization: 'cd4d145b-9e9e-4f82-a2f9-6061f94b66ca'
}
});

// получаю карточки и юзера
Promise.all([
  api.getInitialCards(),
  api.getCurrentUser()
])
.then(([initialCards, user]) => {
  userInfo.setUserInfo(user);
  userId = user._id;
  cardsList.renderItems(initialCards);
})
.catch((err) => {
  console.log(`Ошибка в функции Promise.all: ${err}`);
});

// вставляю карточки
api.getInitialCards()
  .then((initialCards) => {
    cardsList.addItem(createCard(initialCards))
  })
  .catch((err) => {
    console.log(`Ошибка в функции api.getInitialCards: ${err}`)
  });


/* -------------- Функции --------------- */

// генерация одной карточки c функцией открытия большой картинки                        // ГЕНЕРАЦИЯ КАРТОЧЕК
const createCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: ".elements-template",
    handleCardClick: (link, name) => {
      popupImage.open(link, name)
    },
    userId: userId,
    handleRemoveDeleteIcon: (id) => {
      popupDelete.open();
      popupDelete.submitDeleteCardfromServer(() => {
        api.deleteCard(id)
        .then(() => {
          popupDelete.close();
          card.deleteCard();
        })
        .catch((err) => {
          console.log(`Ошибка в функции createCard, в "handleRemoveDeleteIcon": ${err}`);
        })
      })
    },
    handleSetLike: (id) => {
      api.like(id)
      .then((data) => {
        card.handleLikeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка в функции createCard, в "handleLike": ${err}`);
      })
    },
    handleRemoveLike: (id) => {
      api.dislike(id)
      .then((data) => {
        card.handleLikeCard(data);
      })
      .catch((err) => {
        console.log(`Ошибка в функции createCard, в "handleRemoveLike": ${err}`);
      });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}

// генерация карточек                   
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, cardsContainer);

// подключение валидации к попапу Профиля                                               // ВАЛИДАЦИЯ
const formValidatorProfile = new FormValidator(formStuff, formEdit);
formValidatorProfile.enableValidation();

// подключение валидации к попапу Добавления
const formValidatorInputsForm = new FormValidator(formStuff, formAdd);
formValidatorInputsForm.enableValidation();

// подключение валидации к попапу Аватара
const formValidatorAvatar = new FormValidator(formStuff, formAvatar);
formValidatorAvatar.enableValidation();

// экземпляр Юзера                                                                      // ПРОФИЛЬ
const userInfo = new UserInfo({
  name: profileName,
  about: profileDescription,
  avatar: profileAvatar
});

// сохранить изменения в попапе Профиля
const submitProfile = (data) => {
  api.editUserInfo(data)
  .then((data) => {
    userInfo.setUserInfo(data);
    popupEditProfile.close();
  })
}

// открыть попап Профиля
buttonEdit.addEventListener("click", () => {
  popupEditProfile.open();
  const data = userInfo.getUserInfo();
  
  nameEdit.value = data.name;
  descriptionEdit.value = data.about;

  formValidatorProfile.resetValidation();
});

// экземпляр попапа Профиля с сохранением
const popupEditProfile = new PopupWithForm(popUpEdit, submitProfile);
popupEditProfile.setEventListeners();
   
// открыть попап Добавления                                                             // ДОБАВЛЕНИЕ
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  formValidatorInputsForm.resetValidation();
  formAdd.reset();
})

// принять изменения в попапе Добавления
const submitAddCardForm = (data) => {
  popupAddCard.loading(true);
  api.createCardByPopup(data)
  .then((data) => {
    cardsList.addItemPrepend(createCard(data));
    popupAddCard.close();
  })
  .catch((err) => {
    console.log(`Ошибка в функции submitAddCardForm: ${err}`);
  })
  .finally(() => {
    popupAddCard.loading(false);
  })
}

// экземпляр попапа Добавления с сохранением
const popupAddCard = new PopupWithForm(popUpAdd, submitAddCardForm);
popupAddCard.setEventListeners();

// открыть попап аватара                                                                // АВАТАР
buttonAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formValidatorAvatar.resetValidation();
})

// принять изменения в попапе Аватара
const submitAvatar = (data) => {
  popupAvatar.loading(true);
    api.editUserAvatar(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка в функции popupAvatar, в "submitForm": ${err}`);
    })
    .finally(() => {
      popupAvatar.loading(false);
    })
  }

// экземпляр попапа Аватара с сохранением
const popupAvatar = new PopupWithForm(popUpAvatar, submitAvatar);
popupAvatar.setEventListeners();

// экземпляр попапа Изображений                                                         // ЭКЗЕМПЛЯР ИЗОБРАЖЕНИЯ
const popupImage = new PopupWithImage(popUpImg);
popupImage.setEventListeners();

// экземпляр попапа Удаления с сохранением                                              // УДАЛЕНИЕ
const popupDelete = new PopupWithConfirm(popUpDelete);
popupDelete.setEventListeners();