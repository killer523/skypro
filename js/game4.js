const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

document.getElementById('guizUser').addEventListener('click', function() {
    let score = 0; 

    quiz.forEach((item) => {
        // Формируем вопрос с вариантами ответов
        let questionText = `${item.question}\n${item.options.join('\n')}`;
        let userAnswer = prompt(questionText);
        if (userAnswer === null) {
            alert("Вы вышли из игры.");
            return;  
        }
        if (userAnswer === String(item.correctAnswer)) {
            score++;
        }
    });

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
});