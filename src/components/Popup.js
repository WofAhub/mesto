import {esc} from "../utils/data.js"

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  // открытие попапа
  open() {
    this._popupSelector.classList.add(".pop-up_type_active");
    this.setEventListeners();
    document.addEventListener(`keydown`, this._handleEscClose);
  }

  // закрытие попапа
  close() {
    this._popupSelector.classList.remove(".pop-up_type_active");
    document.removeEventListener(`keydown`, this._handleEscClose);
  }

  // закрытие по клавише esc
  _handleEscClose(evt) {
    if(evt.key === esc) {
      this.close();
    }
  }

  // слушатели закрытия по крестику и оверлею
  setEventListeners() {
    this._popupSelector.addEventListener(`mousedown`, (evt) => {
      if (evt.target.classList.contains('button_type_close-button')) {
        this.close(evt.currentTarget);
      }
      if (evt.target.classList.contains('pop-up_type_overlay')) {
        this.close(evt.target);
      }
    });
  }
}