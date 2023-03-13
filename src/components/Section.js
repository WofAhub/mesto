import { cardsContainer } from "../utils/data.js";

export default class Section {
  constructor ({ data, renderer }) {
    this._initialCards = data;
    this._renderer = renderer;
    this._container = cardsContainer;
  }

  renderItems() {
    this._initialCards.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}