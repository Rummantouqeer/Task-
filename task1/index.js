"use strict";
//find even numbers in array
let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let evenArr = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        evenArr.push(arr1[i]);
    }
}
console.log(evenArr);
//find odd numbers in array
let arr2 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let oddarr = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
        oddarr.push(arr2[i]);
    }
}
console.log(oddarr);
//find sum of array elements
let arr3 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum);
//find maximim number in array
let arr4 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let maximim = arr4[0];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > maximim)
        maximim = arr4[i];
}
console.log(maximim);
//filter positive numbers in an array and their sum
let arr5 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let Sum = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > 0) {
        Sum += arr5[i];
    }
}
console.log(Sum);
//filter negative  numbers in an array and their sum
let arr6 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let SUM = 0;
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] < 0) {
        SUM += arr6[i];
    }
}
console.log(SUM);
