export default class Api {
  constructor(options) {
    this._fetchUrl = options.fetchUrl;
    this._headers = options.headers;
  }

  // получаем json, если ответ пришел
  _getJson (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // получаем карточки с сервера
  getInitialCards() {
    return fetch(`${this._fetchUrl}/cards`, {
      headers: this._headers,
    })
    .then(this._getJson)
  }

  // создаем новые карточки на сервер
  createCardByPopup(data) {
    return fetch (`${this._fetchUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._getJson);
  }

  // удалить карточку
  deleteCard(id) {
    return fetch(`${this._fetchUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._getJson);
  }

  // поставить лайк
  like(id) {
    return fetch(`${this._fetchUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers
    })
    .then(this._getJson);
  }

  // убрать лайк
  dislike(id) {
    return fetch(`${this._fetchUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._getJson);
  }

  // получаем информацию о пользователе
  getCurrentUser() {
    return fetch (`${this._fetchUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._getJson);
  }

  // редактирование информации о пользователе через попап Профиля
  editUserInfo(data) {
    return fetch(`${this._fetchUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._getJson);
  }

  // редактирование аватара пользователя через попап Аватара
  editUserAvatar(data) {
    return fetch(`${this._fetchUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(this._getJson);
  }
}