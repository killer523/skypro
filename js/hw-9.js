// Задание 1
const heading = document.querySelector('#myHeading');
const button = document.querySelector('#toggleButton');

button.addEventListener('click', function() {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
        button.textContent = 'Скрыть'; 
    } else {
        heading.style.display = 'none';
        button.textContent = 'Показать'; 
    }
});

// Задание 2

const paragraph = document.querySelector('#myParagraph');
const buttons = document.querySelector('#colorButton');

buttons.addEventListener('click', function() {
    paragraph.style.color = 'blue'; 
});

// Задание 3

const change = document.querySelector('#changeText');
const butt = document.querySelector('#changeButton');

butt.addEventListener('click', function() {
    if (change.textContent === 'Это заголовок') {
        change.textContent = 'Привет, мир!';  // Меняем текст на "Привет, мир!"
    } else {
        change.textContent = 'Это заголовок';  // Меняем текст обратно на "Это заголовок"
    }
});

// Задание 4

const descriptions = document.querySelectorAll('.descriptions');

descriptions.forEach(function(item) {
    item.textContent = 'Измененный текст';
});

// Задание 5

const plot = document.querySelectorAll('.description');

plot.forEach(function(item) {
    item.textContent = 'Новый текст';
});

// Задание 6

const buttonEl = document.getElementById('addParagraphBtn');

buttonEl.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

// Задание 7


const butto = document.getElementById('removeParagraphBtn');


butto.addEventListener('click', function() {
    const firstDescriptionParagraph = document.querySelector('.descriptiont');
    
    if (firstDescriptionParagraph) {
        firstDescriptionParagraph.remove();
    } else {
        alert("Элементов с классом 'descriptiont' больше нет.");
    }
});