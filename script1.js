"use strict";

// if (4 == 9) {
//     console.log("ok");
// } else{
//     console.log('error')
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100){
//     console.log('too much');
// } else {
//     console.log('OK!');
// }

// (num === 50) ?  console.log('OK!') : console.log('error');

const num = '50';

switch (num) {
    case '49':
        console.log('wrong');
        break;
    case '100':
        console.log('wrong');
        break;
    case '50':
        console.log('yeah');
        break;
    default:
        console.log('davai potom');
        break;
}