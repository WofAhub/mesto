import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    
    this._form = this._popupElement.querySelector(".pop-up__form");
  }

  // принимает коллбэк на удаление карточки
  submitDeleteCardfromServer(action) {
    this._handleSubmit = action;
  }

  // удаление карточки по нажатию на submit
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}