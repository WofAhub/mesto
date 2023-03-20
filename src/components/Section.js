export default class Section {
  constructor ({ renderer }) {
    this._renderer = renderer;
    this._container = document.querySelector(".elements");
  }

  renderItems(elements) {
    elements.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrepend(element){
    this._container.prepend(element);
  }
}