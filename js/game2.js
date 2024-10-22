function playGame() {
   
    let num1 = Math.floor(Math.random() * 20) + 1; 
    let num2 = Math.floor(Math.random() * 20) + 1; 
    
    
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];


    let question;
    let correctAnswer;

    switch (operation) {
        case '+':
            question = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            question = `${num1} / ${num2}`;
            correctAnswer = num1 / num2;
            break;
    }

    const userAnswer = prompt(`Решите задачу: ${question}`);
    if (userAnswer === null) {
        alert("Вы вышли из игры.");
        return; 
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Неверно. Правильный ответ: ${correctAnswer}.`);
    }
}
const b = document.getElementById('simpleArithmetic');
b.addEventListener('click', playGame);