import handleCardClick from "./index.js";
export default class Card {
  constructor(data, selectTemplate, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._selectTemplate = selectTemplate;
    this._handleCardClick = handleCardClick;
  }
  
  // клонирование из темплейта
  _getTemplate() {
    const card = document
    .querySelector(this._selectTemplate)
    .content
    .querySelector(".element")
    .cloneNode(true);

    return card;
  }

  _setEventListeners() {
    // слушатель: открытие изображения
    this._elementImg.addEventListener("click", () => {
      handleCardClick(this._name, this._link);
    });

    // слушатель: лайк
    this._buttonLike.addEventListener("click", () => {
      this._togglelike();
    });

    // слушатель: удалить карточку
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });
  }

  // лайк
  _togglelike() {
    this._buttonLike.classList.toggle("button_type_liked-button");
  }

  // удалить
  _deleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector(".button_type_delete-button");
    this._buttonLike = this._element.querySelector(".button_type_like-button");
    this._elementImg = this._element.querySelector('.element__img');
    this._elementTitle = this._element.querySelector('.element__title');

    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}