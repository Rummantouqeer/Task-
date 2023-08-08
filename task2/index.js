"use strict";
//write a program that prints area of a rectangle
function getArea(length, width) {
    return length * width;
}
console.log(getArea(10, 20)); // 200
//write a program that input and calculate volume of cube
function getVolume(length) {
    return length * 3;
}
console.log(getVolume(10));
//check if the given number is positive negative or zero
function checkNumber(number) {
    if (number > 0) {
        console.log(`positive`);
    }
    if (number < 0) {
        console.log(`negative`);
    }
    else {
        console.log(`zero`);
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-10));
console.log(checkNumber(0));
//write a program to check if the number is even or odd
function checkNum(number) {
    if (number % 2 == 0) {
        console.log(`even number`);
    }
    else if (number % 2 != 0) {
        console.log(`odd number`);
    }
    else {
        console.log(`no number`);
    }
}
console.log(checkNum(22));
console.log(checkNum(21));
//write a program if a person is eligible to vote based on their age
function personVotes(age) {
    if (age > 18) {
        console.log(`person is eligible to vote`);
    }
    else if (age < 18) {
        console.log(`person is not eligible to vote`);
    }
}
console.log(personVotes(22));
console.log(personVotes(8));
//  Write a program and print  that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)... in typescript
const expression = ((10 + 5) * 3 - 2) / ((4 % 3) - 7);
console.log(expression);
