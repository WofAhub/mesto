import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImg = this._popupElement.querySelector(".pop-up__img");
    this._popupCaption = this._popupElement.querySelector(".pop-up__img-caption");
  }

  // открытие попапа с изображением
  open(link, name) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupCaption.textContent = name;

    super.open();
  }
}