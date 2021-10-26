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



const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(0)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        let i = 0;
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >=30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            
        }
    },
    toggleVisibleMyDB : function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for ( let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вообще');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre ;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                    console.log('Вы ввели некорректные данные или не ввели их вообще');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}  - это ${item}`)
        });
    }    
};


