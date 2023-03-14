export default class UserInfo {
  constructor({nameUser, descriptionUser}) {
    this._name = nameUser;
    this._description = descriptionUser;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    }
  }

  setUserInfo(inputValues) {
    this._name.textContent = inputValues.name;
    this._description.textContent = inputValues.description;
  }
}