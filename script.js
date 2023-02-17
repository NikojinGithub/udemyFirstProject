
let numberOfFilms;

function start() {

  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

  while(numberOfFilms === null || numberOfFilms === '' || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
  }
}

start();



const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}


function rememberFilms() {
  for(let i = 0; i < 2; i++){   /// Переписать циклом while do...while

    let movie = prompt("Один из последних просмотренных фильмов?")
    let grade = prompt("На сколько оцените его?")
  
    if(movie != null && grade != null && movie != '' && grade != '' && movie.length < 5) {
      personalMovieDB.movies[movie] = grade; 
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }  
}

rememberFilms();

function writeGenres() {
  for(let i = 0; i < 3; i++) {
    const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`)
    personalMovieDB.genres[i] = answer;
  }
}

writeGenres();



function showLevel() {
  if(personalMovieDB.count < 10 && personalMovieDB.count != 0 ){
    console.log("Просмотрено довольно мало фильмов");
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель")
  } else if(personalMovieDB.count > 30) {
    console.log("Вы киноман")
  } else {
    console.log("Произошла ошибка")
  }
}

showLevel();

function showDb(data) {
  if(data.privat === false) {
    console.log(data);
  }
}

showDb(personalMovieDB);


//===========================================================================================

// let i = 0;


// do {
//   let movie = prompt("Один из последних просмотренных фильмов?")
//     let grade = prompt("На сколько оцените его?")
  
//     if(movie != null && grade != null && movie != '' && grade != '' && movie.length < 5) {
//       personalMovieDB.movies[movie] = grade; 
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
  
//     i++;
// } while ( i < 2);

// while(i < 2) {

//   let movie = prompt("Один из последних просмотренных фильмов?")
//   let grade = prompt("На сколько оцените его?")

//   if(movie != null && grade != null && movie != '' && grade != '' && movie.length < 5) {
//     personalMovieDB.movies[movie] = grade; 
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }

//   i++;
// }


// let movie = prompt("Один из последних просмотренных фильмов?")
  // while(movie === null || movie === '' || movie.length > 5){
  //   movie = prompt("Один из последних просмотренных фильмов?");
  // }
  // let grade = prompt("На сколько оцените его?")
  // while(grade === null || grade ===''){
  //   grade = prompt("На сколько оцените его?");
  // }

  // personalMovieDB.movies[movie] = grade; 
//}