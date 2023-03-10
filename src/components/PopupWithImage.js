import Popup from "./Popup.js";
import { popUpImgImg, popUpImgCaption } from "../utils/data.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  // открытие попапа с изображением
  open(link, name) {
    popUpImgImg.src = link;
    popUpImgImg.alt = name;
    popUpImgCaption.textContent = name;

    super.open();
  }
}