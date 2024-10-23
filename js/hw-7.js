// Задание 1

let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);

// Задание 2

function filterByString(arr, str) {
    let lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

let array = ['JavaScript', 'java', 'Python', 'jQuery', 'Ruby'];
let searchString = 'ja';

let result = filterByString(array, searchString);
console.log(result);

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32)); 
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

getRandomNumber();

// Задание 6

function getRandomArray(num) {
    const arrayLength = Math.floor(num / 2); // Длина массива — половина от переданного числа
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * num); // Генерация случайного числа от 0 до num
        randomArray.push(randomNumber);
    }

    return randomArray;
}

console.log(getRandomArray(4));

// Задание 7

function getRandomInRange(min, max) {
    const lower = Math.ceil(min);  
    const upper = Math.floor(max);
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}

console.log(getRandomInRange(1, 10));

// Задание 8

const currentData = new Date();
console.log(currentData);

// Задание 9

const currentDates = new Date(); 
currentDates.setDate(currentDates.getDate() + 73); 
console.log(currentDates);

// Задание 10

function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
    const day = date.getDate(); 
    const month = months[date.getMonth()]; 
    const year = date.getFullYear(); 
    const dayOfWeek = daysOfWeek[date.getDay()]; 

    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

// Пример использования:
const currentDate = new Date();
console.log(formatDate(currentDate));