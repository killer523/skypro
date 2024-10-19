

function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    let guess = 0;

    while (guess !== randomNumber) {
        let user = prompt("Введите ваше число");
        if (user === null) {
            alert("Вы вышли из игры.");
            return; 
        }
        guess = parseInt(user);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Пожалуйста, введите корректное число.");
            continue;
        }

        if (guess < randomNumber) {
            alert("Слишком маленькое число! Попробуйте снова.");
        } else if (guess > randomNumber) {
            alert("Слишком большое число! Попробуйте снова.");
        } else {
            alert(`Поздравляю! Вы угадали число ${randomNumber}!`);
        }
    }
}
const a = document.getElementById('myButton');
a.addEventListener('click', guessTheNumber);

