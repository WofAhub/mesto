// LET
// кнопки
let editbutton = document.querySelector('.button_profile_edit-button');
let closebutton = document.querySelector('.button_pop-up_close-button');
let savebutton = document.querySelector('.button_pop-up_save-button');
// profile
let profileinfo = document.querySelector('.profile__info');
let profilename = document.querySelector('.profile__name');
let profiledescription = document.querySelector('.profile__description');
// element
let likebutton = document.querySelector('.button_element_like-button');
// pop-up
let popup = document.querySelector('.pop-up');
let editname = document.querySelector('.pop-up__name-edit');
let editdescription = document.querySelector('.pop-up__description-edit');
let popupfield = document.querySelector('.pop-up__field');

// FUNCTIONS
// POP-UP
// активация-дизактивация попапа
editbutton.addEventListener('click', function(){
  popup.classList.add('pop-up_type_active');
});
closebutton.addEventListener('click', function(){
  popup.classList.remove('pop-up_type_active');
});
// сохранение
savebutton.addEventListener('click', function(){
  profilename.textContent = editname.value;
  profiledescription.textContent = editdescription.value;

  profilename.value = '';
  profiledescription.value = '';
  
});