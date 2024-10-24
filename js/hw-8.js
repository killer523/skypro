// Задание 1

const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 peoples.sort(function(a,b){
    return a.age - b.age;
 });
 
 console.log(peoples);

 // Задание 2

 function isPositive(num) {
    return num > 0;
    // писать код тут
    }
    function isMale(person) {
        return person.gender ==='male';
    // писать код тут
    }
    function filter(arr, ruleFunction) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    // писать код тут
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));

    // Задание 3

    function printCurrentDate() {
        const currentDate = new Date();
        console.log(`Текущая дата: ${currentDate}`);
    }
    
    const intervalId = setInterval(printCurrentDate, 3000); // запуск каждые 3 секунды
    
    setTimeout(() => {
        clearInterval(intervalId); // остановка через 30 секунд
        console.log("30 секунд прошло");
    }, 30000);

    // Задание 4


function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задание 5


function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}


function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSeconds(() => sayHi('Глеб'));