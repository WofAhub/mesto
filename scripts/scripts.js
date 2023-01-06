// LET
// кнопки
let editButton = document.querySelector(".button_type_edit-button");
let closeButton = document.querySelector(".button_type_close-button");
let saveButton = document.querySelector(".button_type_save-button");
let likeButton = document.querySelector(".button_type_like-button");
// profile
let profileInfo = document.querySelector(".profile__info");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
// pop-up
let popUp = document.querySelector(".pop-up");
let descriptionEdit = document.querySelector(".pop-up__edit_description");
let nameEdit = document.querySelector(".pop-up__edit_name");
let form = document.querySelector(".pop-up__form");
let popUpField = document.querySelector(".pop-up__field");

// FUNCTIONS
// POP-UP
// активация попапа
editButton.addEventListener("click", function () {
  popUp.classList.add("pop-up_type_active");
  nameEdit.value = profileName.textContent;
  descriptionEdit.value = profileDescription.textContent;
});
// дизактивация попапа
function close() {
  popUp.classList.remove("pop-up_type_active");
}
closeButton.addEventListener("click", close);

// сохранение
function save(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profileDescription.textContent = descriptionEdit.value;

  profileName.value = "";
  profileDescription.value = "";

  close();
}
form.addEventListener("submit", save);