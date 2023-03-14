# Проект: Места России  

## Введение  
Восьмая проверочная работа, посвященная Js.  
## Цели  
**Цель 1: Создайте класс Section**  
Создайте класс Section, который отвечает за отрисовку элементов на странице. Этот класс:  
Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.  
Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.  
Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.  
**Цель 2: Создайте класс Popup**  
Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:  
1. Принимает в конструктор единственный параметр — селектор попапа;  
2. Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа;
3. Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc;  
4. Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.  
**Цель 3: Создайте класс PopupWithImage**  
Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.  
**Цель 4: Создайте класс PopupWithForm**  
Создайте класс PopupWithForm, который наследует от Popup. Этот класс:  
1. Кроме селектора попапа принимает в конструктор колбэк сабмита формы;  
2. Содержит приватный метод _getInputValues, который собирает данные всех полей формы;  
3. Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы;  
4. Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.  
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.  
**Цель 5: Создайте класс UserInfo**  
Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:  
1. Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе;  
2. Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии;  
3. Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.  
**Цель 6: Преобразуйте класс Card**  
Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку.  
**Цель 7: Создайте файл .gitignore**  
**Цель 8: Настройте сборку Вебпаком**  
## Сайт  
https://wofahub.github.io/mesto/

