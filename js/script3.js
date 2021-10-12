"use strict"

// function first() {
//     // do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500)
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('i did this task') 
// }

// learnJS('JavaScript', done);

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };


// options.makeTest(); 

// const {border, background} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter)


// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(9);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(",");
products.sort();
console.log(products.join('; '));