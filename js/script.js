"use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++) {
//     if ( i===6 ){
//         // 
//         continue;
//     }
//     console.log(i); 
// }

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько его оцените?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     personalMovieDB.movies[a] = b;
// }
// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько его оцените?', '');
//         i++;

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// } while (i < 2);


let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


let i = 0;



function rememberMyFilms() {
    while ( i < 2) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько его оцените?', '');
            i++;
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
    }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("error");
    }
}

showMyDB();

function writeYourGenres() {
    for ( let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }
}
writeYourGenres();