// Задание 1

let numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
   if (numbs[i] == 10) break;
   console.log(numbs[i]);
}

// Задание 2

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i); 
        break; 
    }
}
// Задание 3

let arrNumber = [1, 3, 5, 10, 20];
let joinNumber = arrNumber.join(' '); 
console.log(joinNumber); 

// Задание 4

let arrNum = []; 

for (let i = 0; i < 3; i++) {
    let innerArr = []; 
    for (let j = 0; j < 3; j++) {
        innerArr.push(1); 
    }
    arrNum.push(innerArr);
}
console.log(arrNum);

// Задание 5

let arrEnd = [1, 1, 1]; 
arrEnd.push(2, 2, 2); 
console.log(arrEnd); 

// Задание 6

let arrDel = [9, 8, 7, 'a', 6, 5];

arrDel.sort() ;
arrDel = arrDel.filter(item => item !== 'a');

console.log(arrDel);

// Задание 7

let numberGuess = [9, 8, 7, 6, 5]; 
let userGuess = Number(prompt("Угадайте число :"));

if (numberGuess.includes(userGuess)) {
    alert("Угадал"); 
} else {
    alert("Не угадал"); 
}

// Задание 8

let str = 'abcdef';
str = str.split('').reverse().join(''); 
console.log(str);

// Задание 9

let arrAssocіon = [[1, 2, 3], [4, 5, 6]];
let flattenedArr = [...arrAssocіon[0], ...arrAssocіon[1]]; 
console.log(flattenedArr);

// Задание 10

let arrIteration= [3, 5, 7, 2, 9, 1]; 

for (let i = 0; i < arrIteration.length - 1; i++) { 
    let sum = arrIteration[i] + arrIteration[i + 1]; 
    console.log(sum); 
}

// Задание 11

function getSquares(arr) {
    return arr.map(num => num * num); 
}
let numbers = [1, 2, 3, 4, 5]; 
let squares = getSquares(numbers); 
console.log(squares);

// Задание 12

function getLengths(arr) {
    return arr.map(str => str.length); 
}
let strings = ['apple', 'banana', 'cherry']; 
let lengths = getLengths(strings); 
console.log(lengths); 

    // Задание 13

    function getNegative(arr) {
        return arr.filter(num => num < 0); 
    }
    
    let numberNegative = [1, -2, 3, -4, 5, -6]; 
    let negativeNumbers = getNegative(numberNegative); 
    console.log(negativeNumbers);

    // Задание 14

    
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11)); 
}

let evenNumbers = randomNumbers.filter(num => num % 2 === 0); 

console.log('Исходный массив:', randomNumbers);
console.log('Массив четных значений:', evenNumbers);

    // Задание 15

    let randomNumber = [];
for (let i = 0; i < 6; i++) {
    randomNumber.push(Math.floor(Math.random() * 11)); 
}

let average = randomNumber.reduce((r, i) => r + i/randomNumber.length, 0.0);
//let sum = randomNumber.reduce((a, b) => a + b) (0);
//let average = sum / randomNumber.length;

console.log('Сгенерированный массив:', randomNumber);
console.log('Среднее арифметическое:', average);