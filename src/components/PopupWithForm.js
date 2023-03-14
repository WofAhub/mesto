import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitForm) {
    super(popupElement);

    this._submitForm = submitForm;
    this._form = this._popupElement.querySelector(".pop-up__form");
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
      
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  // закрытие попапов и ресет инпутов
  close() {
    this._form.reset();
    super.close();
  }
}