const formStuff = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  fieldSet: '.pop-up__fieldset',
  submitButtonSelector: '.button_popup-style_valid',
  inactiveButtonClass: 'button_popup-style_invalid',
  inputErrorClass: 'pop-up__input_type_error-border',
  errorClass: 'pop-up__input-errormessage_active'
};

// показать ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formStuff.inputErrorClass);
  errorElement.textContent = errorMessage.validationMessage;
  errorElement.classList.add(formStuff.errorClass);
};

// убрать ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formStuff.inputErrorClass);
  errorElement.classList.remove(formStuff.errorClass);
  errorElement.textContent = '';
};

// проверка на валидность и показ/скрытие ошибки
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formStuff.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formStuff.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

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

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formStuff.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
  const fieldsetList = Array.from(document.querySelectorAll(formStuff.fieldSet));
  fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
  });
};