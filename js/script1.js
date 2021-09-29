"use strict";

let  num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello');
console.log(num);

console.log(calc(4, 3));

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(123, 3));
console.log(calc(4, 465));
console.log(calc(4, 798));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;