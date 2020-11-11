/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
    // "Alliens"
  ]
};


// 1
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(elem => {
  elem.remove();
});
// 2
document.querySelector('.promo__genre').textContent = 'Драма';
// 3
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
// 4
movieDB.movies.sort();
const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = '';
movieDB.movies.forEach((el, i) => {
  filmList.innerHTML += `
  <li class="promo__interactive-item">${i + 1}. ${el}
    <div class="delete"></div>
  </li>
  `;
  
});
