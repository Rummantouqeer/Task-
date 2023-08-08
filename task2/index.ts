
//QUESTION 1
//write a program that prints area of a rectangle

function getArea(length: number, width: number): number {
  return length * width;
}
console.log(getArea(10, 20)); // 200

//QUESTION 2
//write a program that input and calculate volume of cube

function getVolume(length:number): number {
return length*3
}
console.log(getVolume(10));

//QUESTION 3
//check if the given number is positive negative or zero

function checkNumber(number:number){
  if (number>0) {
    console.log(`positive`)
    
  }
  if (number<0) {
    console.log(`negative`)
  } else {
    console.log(`zero`)
  }
  }
  console.log(checkNumber(10));
  console.log(checkNumber(-10));
  console.log(checkNumber(0));


//QUESTION 4
  //write a program to check if the number is even or odd


  function checkNum(number:number){
    if(number%2==0){
      console.log(`even number`)
    }
    else if (number%2!=0) {
      console.log(`odd number`)
      
    } else {
      console.log(`no number`)
    }
  }
console.log(checkNum(22));
console.log(checkNum(21));


//QUESTION 5
//write a program if a person is eligible to vote based on their age


function personVotes(age:number){
  if(age>18){
    console.log(`person is eligible to vote`)
  }
  else if(age<18){
    console.log(`person is not eligible to vote`)
  }
}
console.log(personVotes(22));
console.log(personVotes(8));


//QUESTION 6
//  Write a program and print  that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)... in typescript

const expression = ((10+5)*3-2)/((4%3)-7);
console.log(expression)
