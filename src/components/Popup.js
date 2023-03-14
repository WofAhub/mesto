import {esc} from "../utils/data.js"

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._btnClose = this._popupElement.querySelector(".button_type_close-button");
    this._escClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open() {
    this._popupElement.classList.add("pop-up_type_active");
    document.addEventListener("keydown", this._escClose);
  }

  // закрытие попапа
  close() {
    this._popupElement.classList.remove("pop-up_type_active");
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
    
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("pop-up_type_overlay")) {
        this.close();
      }
    });
  }
}