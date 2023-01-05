# Проект: Места России

## Введение  
Четвертая проверочная работа, посвященная Js. Сложно.
## Особенности  
1. Разделы выделяю Апперкейсом, а подразделы - низким;  
2. Все изменения отмечены словом "изменено" в закомментированных строках, но только в HTML. Все остальные изменения я вынес в READ;  
## Доработки  
**Кнопки:**  
1. Изменены классы у кнопок, добавлены типы ко всем кнопкам, отредактированы импорты (стало):  
Классы:  
а) class="button button__edit-button" type="button";  
б) class="button button__add-button" type="button";  
в) class="button button__like-button" type="button";  
г) class="button button__close-button" type="button";  
д) class="button button__save-button" type="submit";  
Импорты:  
/* BUTTON */  
@import url(../blocks/button/button.css);
/* profile */
@import url(../blocks/button/__edit-button/button__edit-button.css);
@import url(../blocks/button/__add-button/button__add-button.css);
/* element */
@import url(../blocks/button/__like-button/button__like-button.css);
@import url(../blocks/button/__liked-button/button__liked-button.css);
/* pop-up */
@import url(../blocks/button/__close-button/button__close-button.css);
@import url(../blocks/button/__save-button/button__save-button.css);  
2. Кнопка "лайк" отрегулирвоана — пропорции сохраняются при заполнении контента;  
3. Кнопки в js изменены, чтобы соответсовать HTML;  
**Элементы**  
1. Изменить элементы;  
2. HTML код Pop-up изменен (были удалены ненужные классы и добавлены новые), CSS код был изменен, чтобы соответствовать HTML, отредактированы импорты (стало):  
а) section class="pop-up pop-up__overlay";  
б) div class="pop-up__container";  
в) form class="pop-up__form" name="pop-up-form"  
   fieldset class="pop-up__field"  
   input type="text" class="pop-up__edit pop-up__name-edit" placeholder="Жак-Ив Кусто" name="name-edit"  
   input type="text" class="pop-up__edit pop-up__description-edit" placeholder="Исследователь океана" name="description-edit"  
   /fieldset  
3. Pop-up стал более "резиновым";  
4. 5. В element__items была убрана высота, и абсолютное позиционирование заменено на верхний марджин;  
5. В element высота стала "минимальной", а не жесткой;  
6. 
**JavaScript**  
1. Сохранение происходит только по нажатию на кнопку "Сохранить";  
2. В форме сохраняются только новые изменения. Изменения, которые были не сохранены — сбрасываются;  
3. Поп-ап закрывается после сохранения автоматически;  
4. Кнопка "закрыть" не сохраняет информацию в форме и не переписывает информацию профиля;  
**Детали**  
1. Заменил h2 на h3 для "Редактирование профиля";  
2. Сделал списком elements;  
3. В pop-up__title убрал в медиазапросе повторный элемент;  
4. Перенес "изменение цвета плейсхолдера" в папку pop-up__edit;  
5. В footer__coopyright был убран повторный медиазапрос;  
6. В profile__name был убран повторный медиазапрос;  
7. Во многих СSS файлах были убраны повторные медиазапросы;  
## Сайт  
https://wofahub.github.io/mesto/