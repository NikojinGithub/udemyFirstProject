
// let numberOfFilms;

// function start() {

//   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

//   while(numberOfFilms === null || numberOfFilms === '' || isNaN(numberOfFilms)){
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
//   }
// }

// start();

// let numberOfFilms;


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    while(personalMovieDB.count === null || personalMovieDB.count === '' || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }
  },
  rememberFilms: () => {
    for(let i = 0; i < 2; i++){ 
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
  },
  writeGenres: () => {
    for(let i = 0; i < 3; i++) {
      const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if(answer === null || answer === ''){
        i--;
      } else {
        personalMovieDB.genres[i] = answer;
      }
    }
    // personalMovieDB.genres.forEach(i => {
    //   console.log(`Любимый жанр #${personalMovieDB.genres.indexOf(i) + 1} - это ${i}`);
    // })
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    })
  },
  showLevel: () => {
    if(personalMovieDB.count < 10 && personalMovieDB.count != 0 ){
      console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель")
    } else if(personalMovieDB.count > 30) {
      console.log("Вы киноман")
    } else {
      console.log("Произошла ошибка")
    }
  },
  showDb: () => {
    if(personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  // toggleVisibleMyDb: (data) => {
  //   if(data.privat === false) {
  //     data.privat = true
  //   } else {
  //     data.privat = false
  //   }
  // }
  toggleVisibleMyDb: () => {
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
}

// personalMovieDB.start()
// personalMovieDB.rememberFilms();
// personalMovieDB.writeGenres();
// personalMovieDB.showLevel();
// personalMovieDB.toggleVisibleMyDb(personalMovieDB);
// personalMovieDB.toggleVisibleMyDb();
// personalMovieDB.showDb();


// function rememberFilms() {
//   for(let i = 0; i < 2; i++){   /// Переписать циклом while do...while

//     let movie = prompt("Один из последних просмотренных фильмов?")
//     let grade = prompt("На сколько оцените его?")
  
//     if(movie != null && grade != null && movie != '' && grade != '' && movie.length < 5) {
//       personalMovieDB.movies[movie] = grade; 
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }  
// }

// rememberFilms();

// function writeGenres() {
//   for(let i = 0; i < 3; i++) {
//     const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`)
//     personalMovieDB.genres[i] = answer;
//   }
// }

// writeGenres();



// function showLevel() {
//   if(personalMovieDB.count < 10 && personalMovieDB.count != 0 ){
//     console.log("Просмотрено довольно мало фильмов");
//   } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Вы классический зритель")
//   } else if(personalMovieDB.count > 30) {
//     console.log("Вы киноман")
//   } else {
//     console.log("Произошла ошибка")
//   }
// }

// showLevel();

// function showDb(data) {
//   if(data.privat === false) {
//     console.log(data);
//   }
// }

// showDb(personalMovieDB);


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