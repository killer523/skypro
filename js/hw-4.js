// Задание 1

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2

let i = 1;
do {
    console.log(i);
    i++;
 } while(i <= 5);

 for (let p = 1; p < 6; p++) {
    console.log(p);
}

// Задание 3

 for (let q = 7; q < 23; q++) {
    console.log(q);
}

// Задание 4

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
 }
 
 for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
 }

 // Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log("Результат:", n);
console.log("Количество итераций:", num);

// Задание 6

let firstDay = 1; 
let dayMonth = 31;

for (let day = firstDay; day <= dayMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

//Дополнительные задания

// Задание 1


let k = 100;
let iterations = 0;

while (k >= 0) {
    k -= 7;
    iterations++;
}

console.log("Результат:", k);
console.log("Количество итераций:", iterations);

// Задание 2

let months = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь"
};
for (let key in months) {
    console.log(`${key}: ${months[key]}`);
 }

 // Задание 3

 const book = {
    title: "Нечто",
    author: "Александр Варго",
    year: 2008,
    genre: "хоррор"
};
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Задание 4

let randomNumbers = [1,-5,55,89,-8,99,-22,44,15,47];
let minNumber = randomNumbers[0];

for (let key in randomNumbers) {
    if (randomNumbers[key] < minNumber) {
        minNumber = randomNumbers[key];
    }
}
console.log(minNumber);
