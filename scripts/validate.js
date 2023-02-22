export default class FormValidate {
  constructor(formStuff, formElement) {
    this._formStuff = formStuff;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._formStuff.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._formStuff.submitButtonSelector);
  }

_showInputError(inputElement)  {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(this._formStuff.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(this._formStuff.errorClass);
}

// убрать ошибку
_hideInputError(inputElement) {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(this._formStuff.inputErrorClass);
  errorElement.classList.remove(this._formStuff.errorClass);
  errorElement.textContent = '';
}

// установка слушателей
_setEventListeners() {
  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
}

// проверка на валидность и показ/скрытие ошибки
_checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
}

// есть ли невалидный инпут?
_hasInvalidInput() {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

// переключение кнопки с валида-невалида
_toggleButtonState() {
  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this._formStuff.inactiveButtonClass);
    this._buttonElement.disabled = true;

  } else {
    this._buttonElement.classList.remove(this._formStuff.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
}

// сброс валидации
resetValidation() {
  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement, this._buttonElement);
  });
}

// принимающий валидацию
enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  const buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
  const fieldsetList = Array.from(this._formElement.querySelectorAll(this._fieldSet));


  this._formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._toggleButtonState(formList, buttonSubmit, this._formStuff.inactiveButtonClass);
  });

  fieldsetList.forEach((fieldSet) => {
    this._setEventListeners(fieldSet);
  });
  this._setEventListeners();
  }
}