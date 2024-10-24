
const options = ["камень", "ножницы", "бумага"];

function getUserChoice() {
    let choice = prompt("Выберите: 1. камень,2. ножницы или 3. бумага?");
    if (choice === null) {
        alert("Вы отменили игру.");
        return null;  // Возвращаем null, чтобы выйти из игры
    }

    choice = choice.toLowerCase();

    while (!options.includes(choice) && !["1", "2", "3"].includes(choice)) {
        choice = prompt("Неправильный ввод! Пожалуйста, выберите: камень, ножницы или бумага.");
        
        if (choice === null) {
            alert("Вы вышли из игры.");
            return null;
        }

        choice = choice.toLowerCase();
    }
    if (choice === "1") return options[0]; // камень
    if (choice === "2") return options[1]; // ножницы
    if (choice === "3") return options[2]; // бумага
    return choice;
}

function objectGuess() {
   
const userChoice = getUserChoice();

if (userChoice !== null) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    function determineWinner(user, computer) {
        if (user === computer) {
            return "Ничья!";
        } else if (
            (user === "камень" && computer === "ножницы") ||
            (user === "ножницы" && computer === "бумага") ||
            (user === "бумага" && computer === "камень")
        ) {
            return "Вы победили!";
        } else {
            return "Компьютер победил!";
        }
    }

    const result = determineWinner(userChoice, computerChoice);
    alert(`Ваш выбор: ${userChoice}, выбор компьютера: ${computerChoice}. Результат: ${result}`);
}
    
}
const d = document.getElementById('guessObject');
d.addEventListener('click', objectGuess);