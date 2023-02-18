export class FormValidate {
  constructor()
// показать ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formStuff.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formStuff.errorClass);
};

// убрать ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formStuff.inputErrorClass);
  errorElement.classList.remove(formStuff.errorClass);
  errorElement.textContent = '';
};

// установка слушателей
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(formStuff.inputSelector));
  const buttonElement = formElement.querySelector(formStuff.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

// проверка на валидность и показ/скрытие ошибки
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// есть ли невалидный инпут?
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// переключение кнопки с валида-невалида
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formStuff.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formStuff.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// сброс старой валидации во время нового открытия попапов
const resetValidation = (formElement, formStuff) => {

  const inputList = Array.from(formElement.querySelectorAll(formStuff.inputSelector));
  const buttonElement = formElement.querySelector(formStuff.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, formStuff);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, formStuff);
  });

};

// принимающий валидацию
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formStuff.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
}