// Задание 1
let a = 10;
alert(a); // выводит 10
a = 20;
alert(a); // выводит 20

// Задание 2
let iphoneYear = 2007;
alert(iphoneYear); // выводит 2007

// Задание 3
let jsName = " Brendan Eich";
alert(jsName); // выводит "Брендан Айк"

// Задание 4
let c = 10;
let d = 2;

alert("Сумма: " + (c + d));        
alert("Разность: " + (c - d));     
alert("Произведение: " + (c * d));
alert("Частное: " + (c / d));      

// Задание 5

let result = Math.pow(2, 5);
alert(result);

// Задание 6
let l = 9;
let k = 2;
let remainder = l % k;

alert(remainder); 

// Задание 7

let num = 1;
num += 5;       
num -= 3;       
num *= 7;      
num /= 3;       
num++;          
num--;          
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9

let user = {
    name: "Андрей",    
    age: 37,          
    isAdmin: false      
};

console.log(user)

// Задание 10
let name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);