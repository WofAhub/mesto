import {esc} from "../utils/data.js"

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._btnClose = this._popupSelector.querySelector(".button_type_close-button");
    this._escClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open() {
    this._popupSelector.classList.add("pop-up_type_active");
    document.addEventListener("keydown", this._escClose);
  }

  // закрытие попапа
  close() {
    this._popupSelector.classList.remove("pop-up_type_active");
    document.removeEventListener("keydown", this._escClose);
  }

  // закрытие по клавише esc
  _handleEscClose(evt) {
    if(evt.key === esc) {
      this.close();
    }
  }

  // слушатели закрытия по крестику и оверлею
  setEventListeners() {
    this._btnClose.addEventListener("click", () => {
      this.close();
    });
    
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("pop-up_type_overlay")) {
        this.close(evt.target);
      }
    });
  }
}