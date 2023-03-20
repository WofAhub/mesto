export default class Card {
  constructor({data, templateSelector, handleCardClick, userId, handleRemoveDeleteIcon, handleSetLike, handleRemoveLike}) {
    this._link = data.link;
    this._name = data.name;
    this._cardId = data._id; //id карточки
    this._likes = data.likes;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    
    this._userId = userId; //id юзера
    this._isOwnerCard = data.owner._id === userId; //id владельца карточки

    this._handleRemoveDeleteIcon = handleRemoveDeleteIcon;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }
  
  // клонирование из темплейта                                                              //ТЕМПЛЕЙТ
  _getTemplate() {
    const card = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);

    return card;
  }

  //есть ли кнопка delete?                                                                  //УДАЛЕНИЕ
  _hasDeleteButton() {
    if(!this._isOwnerCard){
      this._deleteButton.remove();
    }
  }
  
  // удалить карточку
  deleteCard() {
    this._element.remove();
  }

  // лайкнута карточка?                                                                     //ЛАЙКИ
  _isCardLiked() {     
    if (this._likes.some((user) => {
      return this._userId === user._id
    }))
    {
      this._buttonLike.classList.add("button_type_liked-button");
    }
  }

  // счетчик лайков и переключение лайков
  handleLikeCard(data) {
    this._counterLikes.textContent = data.likes.length;
    this._buttonLike.classList.toggle("button_type_liked-button");
  }

  // счетчик лайков
  _counterLikesUpdaiter() {
    this._counterLikes.textContent = this._likes.length;
  }

  // слушатели                                                                              //СЛУШАТЕЛИ
  _setEventListeners() {
    // слушатель: открытие изображения
    this._elementImg.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });

    // слушатель: лайк карточке
    this._buttonLike.addEventListener("click", () => {
      if(this._buttonLike.classList.contains("button_type_liked-button")) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });

    // слушатель: удалить карточку
    this._deleteButton.addEventListener("click", () => {
      this._handleRemoveDeleteIcon(this._cardId);
    });
  }

  // генерация карточек                                                                     //ГЕНЕРАЦИЯ
  generateCard() {
    this._element = this._getTemplate();

    this._deleteButton = this._element.querySelector(".button_type_delete-button");
    this._buttonLike = this._element.querySelector(".button_type_like-button");
    this._elementImg = this._element.querySelector(".element__img");
    this._elementTitle = this._element.querySelector(".element__title");
    this._counterLikes = this._element.querySelector(".element__counterLikes");

    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;


    this._setEventListeners();
    this._hasDeleteButton();
    this._isCardLiked();
    this._counterLikesUpdaiter();

    return this._element;
  }
}