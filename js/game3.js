  function flipText(){
  const userInput = prompt("Введите текст, который хотите перевернуть:");
  if (userInput) {
      const reversedText = userInput.split('').reverse().join('');
      alert(`Перевернутый текст: ${reversedText}`);
  } else {
      alert("Вы не ввели текст!");
  }
}
const c = document.getElementById('texFlip');
c.addEventListener('click', flipText);