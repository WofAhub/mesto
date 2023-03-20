import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    
    this._form = this._popupElement.querySelector(".pop-up__form");

    this._buttonSubmit = this._form.querySelector(".button_popup-style_valid")
    this._buttonSubmitText = this._buttonSubmit.textContent;
  }

  // принимает коллбэк на удаление карточки
  setNewHandler(action) {
    this._handleSubmit = action;
  }

  // удаление карточки по нажатию на submit
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  // индикатор удаления
  deleting(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Удаление...'
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }
}