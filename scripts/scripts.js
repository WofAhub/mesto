// CONST

// блок-содержимое profile                                 // ПРОФИЛЬ
const profileInfo = document.querySelector(".profile__info");                        
const profileName = profileInfo.querySelector(".profile__name");                        // имя профиля
const profileDescription = profileInfo.querySelector(".profile__description");          // описание профиля 

// попап-содержимое popUpEdit                              // ПОПАП РЕДКТИРОВАНИЯ
const popUpEdit = document.querySelector(".pop-up_type_edit");                          // главный попап редактирования
const descriptionEdit = popUpEdit.querySelector(".pop-up__edit_type_description");      // описание
const nameEdit = popUpEdit.querySelector(".pop-up__edit_type_name");                    // имя 
const formEdit = popUpEdit.querySelector(".pop-up__form_type_edit");                    // форма        

// попап-содержимое popUpAdd                               // ПОПАП ДОБАВЛЕНИЯ
const popUpAdd = document.querySelector(".pop-up_type_add");                            // главный попап добавления
const popUpAddForm = popUpAdd.querySelector(".pop-up__form_type_add");                  // форма

// попап-содержимое popUpImg                               // ПОПАП ИЗОБРАЖЕНИЯ
const popUpImg = document.querySelector(".pop-up_type_img");                            // главный попап изображения
const popUpImgContainer = popUpImg.querySelector(".pop-up__img-container");
const popUpImgImg = popUpImg.querySelector(".pop-up__img");
const popImgCaption = popUpImg.querySelector(".pop-up__img-caption");

// редактировать и добавить                                // КНОПКИ    
const editButton = document.querySelector(".button_type_edit-button");                  // кнопка редактирования
const addButton = document.querySelector(".button_type_add-button");                    // кнопка добавления

// закрыть
const closeButtonImg = popUpImg.querySelector(".button_type_close-button");             // закрыть попап изображения
const closeButtonEdit = popUpEdit.querySelector(".button_type_close-button");           // закрыть попап редактирования
const closeButtonAdd = popUpAdd.querySelector(".button_type_close-button");             // закрыть попап добавления



// FUNCTIONS

// активация попапов
function popUpOpen(a) {
  a.classList.add("pop-up_type_active")
};

// дизактивация попапов
function popUpClose(b) {
  b.classList.remove("pop-up_type_active");
};


// активация попапа редактирования                         // ПОПАП РЕДКТИРОВАНИЯ
editButton.addEventListener("click", () => {
  popUpOpen(popUpEdit);
  nameEdit.value = profileName.textContent;
  descriptionEdit.value = profileDescription.textContent;
});

// слушатель закрытия попапа редактирования
closeButtonEdit.addEventListener("click", () => {
  popUpClose(popUpEdit);
});

// сохранение информации в попапе редактирования
function saveProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profileDescription.textContent = descriptionEdit.value;

  profileName.value = "";
  profileDescription.value = "";

  popUpClose(popUpEdit);
}

// слушатель сохранения в попапе редактирования
formEdit.addEventListener("submit", saveProfileInfo);


// активация попапа добавления                             // ПОПАП ДОБАВЛЕНИЯ
addButton.addEventListener("click", () => {
  popUpOpen(popUpAdd);
});

// слушатель добавления карточки с помощью попапа добавления
popUpAddForm.addEventListener("submit", createNewCard);

// слушатель закрытия попапа добавления
closeButtonAdd.addEventListener("click", () => {
  popUpClose(popUpAdd);
});


// дизактивация попапа изображения                         // ПОПАП ИЗОБРАЖЕНИЯ  
closeButtonImg.addEventListener("click", () => {
  popUpClose(popUpImg);
});