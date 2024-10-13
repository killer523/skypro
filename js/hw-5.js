// Задание 1

function min(a,b) {
    if (a < b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

min(6, 7); 

// Задание 2

function even(a) {
    if (a % 2) {
        return console.log('Число нечетное');
    } else {
        return console.log('Число четное');
    }
}

even(11); 

// Задание 3

function isSquare(num) {
    let square  = num * num;
    console.log(square)
}

isSquare(5);

function evenSquare(num) {
   return num * num;
} 

let result = evenSquare(6);
console.log(result);

// Задание 4

function yearsСlient() {
    let age = prompt('сколько вам лет');
    let ageNumber = Number(age);
    if (isNaN(ageNumber)) {
        alert('Вы ввели не число. Пожалуйста, попробуйте снова.'); 
    } else if (ageNumber < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (ageNumber >= 0 && ageNumber <= 12){
        console.log('Привет, друг!');
    } else if (ageNumber >= 13) {
        console.log('Добро пожаловать!');
    }
}

yearsСlient();

// Задание 5

function correctingNum(a,b) {
    let aNum = Number(a);
    let bNum = Number(b);
    if (isNaN(aNum) || isNaN(bNum)) {
        console.log('Вы ввели не числа. Пожалуйста, попробуйте снова.');
    } else {
        console.log(aNum * bNum);
    }
}

correctingNum(2, '87');

// Задание 6

function enterNum() {
    let clientNum = prompt('Введите число');
    let n = Number(clientNum);

    if (isNaN(n)) {
        alert('Переданный параметр не является числом'); 
    } else {
       return console.log(`${n} в кубе равняется ${n*n}`);
    }
}

enterNum();

// Задание 7

const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Площадь circle1: ${circle1.getArea().toFixed(2)}`); 
console.log(`Периметр circle1: ${circle1.getPerimeter().toFixed(2)}`); 

console.log(`Площадь circle2: ${circle2.getArea().toFixed(2)}`); 
console.log(`Периметр circle2: ${circle2.getPerimeter().toFixed(2)}`);