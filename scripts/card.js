import { openPopUp, popImgCaption, popUpImgImg } from "./index.js";

const buttonLike = document.querySelector(".button_type_like-button");
const buttonDelete = document.querySelector(".button_type_delete-button");
const imgOfCard = document.querySelector(".element__img");
const elementTitle = document.querySelector(".element__title");

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  // клонирование из темплейта
  _getTemplate() {
    const card = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);

    return card;
  }

  // создание карточек
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    imgOfCard.src = this._link;
    imgOfCard.alt = this._name;
    elementTitle.textContent = this._name;
  
    return this._element;
  }

  // удалить карточку
  _deleteCard() {
    this._element.remove();
  }

  // лайкнуть карточку
  _likeCard() {
    const evtTarget = evt.target;
    evtTarget.classList.toggle("button_type_liked-button");
  }

  // открыть изображение карточки
  _openBigImgOfCard() {
      popUpImgImg.src = this._link;
      popUpImgImg.alt = this._name;
      popImgCaption.textContent = this._name;

      openPopUp(popUpImg);
  };
  

  // слушатели функций
  _setEventListeners() {
    // слушатель лайка
    buttonLike.addEventListener("click", () => {
      this._likeCard();
    });

    // слушатель удаления
    buttonDelete.addEventListener("click", () => {
      this._deleteCard();
    });

    // слушатель открывания изображения
    imgOfCard.addEventListener("click", () => {
      this._openBigImgOfCard() ;
    });
  }
}

// добавить карточку
export default function submitCreateNewCard(evt) {
  evt.preventDefault();
  const popUpImgName = popUpAddForm.querySelector(".pop-up__input_type_img-name").value;
  const popUpLinkUrl = popUpAddForm.querySelector(".pop-up__input_type_img-url").value;
  const element = createCard({name: popUpImgName, link: popUpLinkUrl});
  cardsContainer.prepend(element);
  closePopUp(popUpAdd);
    
  popUpAddForm.reset();
}