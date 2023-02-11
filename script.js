const  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const lastMovieOne = prompt("Один из последних просмотренных фильмов?");
const gradeOne = prompt("На сколько оцените его?");

const lastMovieTwo = prompt("Один из последних просмотренных фильмов?");
const gradeTwo = prompt("На сколько оцените его?");

personalMovieDB.movies[lastMovieOne] = gradeOne;
personalMovieDB.movies[lastMovieTwo] = gradeTwo;

console.log(personalMovieDB);