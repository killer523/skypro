// Задание 1

let password = 'пароль'; 
let userInput = prompt('Введите пароль'); 

if (userInput === password) {
    alert('Пароль введен верно'); 
} else {
    alert('Пароль введен неправильно'); 
}

// Задание 2

let x = Number(2); 


    if (x > 0 && x < 10) {
        console.log('Верно'); 
    } else {
        console.log('Неверно'); 
    }

// Задание 3

let d = 50; // Пример значения для d
let e = 20;  // Пример значения для e

if (d > 100 || e > 100) {
    console.log('Верно'); // Если хотя бы одна переменная больше 100
} else {
    console.log('Неверно'); // В противном случае
}

// Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 12; // Пример номера месяца

if (monthNumber < 1 || monthNumber > 12) {
    console.log('Номер месяца должен быть от 1 до 12.');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Некорректный номер месяца');
    }
}

// Дополнительные задания

// Задание 1

let clientInput = prompt('Пожалуйста, введите любое число'); 
let number = Number(clientInput); 

if (isNaN(number)) {
    alert('Вы ввели не число. Пожалуйста, попробуйте снова.'); 
} else {
    // Проверяем четность
    if (number % 2 === 0) {
        alert('Число четное'); 
    } else {
        alert('Число нечетное'); 
    }
}

// Задание 2

let clientOS = 0; // 0 — iOS, 1 — Android

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке.');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке.'); 
} else {
    console.log('Неизвестная операционная система.'); 
}

// Задание 3

let clientOSS = 1; // 0 — iOS, 1 — Android
let clientDeviceYear = 2015; // Год производства телефона

let message; // Переменная для сообщения

if (clientDeviceYear < 2015) {
    // Если год производства раньше 2015
    if (clientOSS === 0) {
        message = 'Установите облегченную версию приложения для iOS по ссылке.'; 
    } else {
        message = 'Установите облегченную версию приложения для Android по ссылке.'; 
    }
} else {
    // Если год производства 2015 или позже
    if (clientOSS === 0) {
        message = 'Установите версию приложения для iOS по ссылке.'; 
    } else {
        message = 'Установите версию приложения для Android по ссылке.'; 
    }
}

console.log(message); 