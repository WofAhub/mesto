import {esc} from "../utils/data.js"

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  // открытие попапа
  open() {
    this._popupSelector.classList.add(".pop-up_type_active");
    this.setEventListeners();
  }

  // закрытие попапа
  close() {
    this._popupSelector.classList.remove(".pop-up_type_active");
  }

  // закрытие по клавише esc
  _handleEscClose(evt) {
    if(evt.key === esc) {
      this.close();
    }
  }

  // слушатели закрытия по крестику и оверлею
  setEventListeners() {
    const btnClose = (evt) => {
      if (evt.target.classList.contains('button_type_close-button')) {
        this.close(evt.currentTarget);
      }
    }

    const overClose = (evt) => {
      if (evt.target.classList.contains('pop-up_type_overlay')) {
        this.close(evt.target);
      }
    }
  }
}