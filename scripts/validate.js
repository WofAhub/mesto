export default class FormValidate {
  constructor(formStuff, formElement) {
    this._formStuff = formStuff;
    this._formElement = formElement;
    this._formSelector = formStuff.formSelector;
    this._inputSelector = formStuff.inputSelector;
    this._fieldSet = formStuff.fieldSet;
    this._submitButtonSelector = formStuff.submitButtonSelector;
    this._inactiveButtonClass = formStuff.inactiveButtonClass;
    this._inputErrorClass = formStuff.inputErrorClass;
    this._errorClass = formStuff.errorClass;
  }

_showInputError(inputElement, errorMessage)  {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
}

// убрать ошибку
_hideInputError(inputElement) {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
}

// установка слушателей
_setEventListeners() {
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  this._toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);

      this._toggleButtonState(inputList, buttonElement);
    });
  });
}

// проверка на валидность и показ/скрытие ошибки
_checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
}

// есть ли невалидный инпут?
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

// переключение кнопки с валида-невалида
_toggleButtonState(inputList, buttonElement) {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

// сброс валидации
// resetValidation() {
//   this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//   this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
//   this._toggleButtonState(this._inputList, this._buttonElement);
//   this._inputList.forEach((inputElement) => {
//     this._hideInputError(inputElement);
//   });
// }

// принимающий валидацию
enableValidation() {
  this._setEventListeners();
  this._formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  const formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
  const buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
  this._toggleButtonState(formList, buttonSubmit, this._inactiveButtonClass);
});
};
}