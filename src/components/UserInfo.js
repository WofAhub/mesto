
export default class UserInfo {
  constructor({name, description}) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo(inputValues) {
    this._name.textContent = inputValues;
    this._description.textContent = inputValues;
  }
}