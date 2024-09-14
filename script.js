const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');


function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  resultDiv.textContent = randomNumber;
}


generateBtn.addEventListener('click', generateRandomNumber);
