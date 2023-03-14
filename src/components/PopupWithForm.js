import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);

    this._formSubmit = formSubmit;
    this._form = this._popupSelector.querySelector(".pop-up__form");
    this._inputList = this._form.querySelectorAll(".pop-up__input");
  }

  // данные из формы
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  // слушатели
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      
      this._formSubmit(this._getInputValues());
      this.close();
    });
  }

  // закрытие попапов и ресет инпутов
  close() {
    this._form.reset();
    super.close();
  }
}