// Извлечение чисел
const getNumber = (text) => parseInt(text.toString().replace(/\D/g,''), 10);

getNumber('2023 год');

// Счастливый билет
const isHappyTicket = (number) => {
  const preparedData = number.toString();

  if (preparedData.length % 2 !== 0) {
    return false;
  }
  const leftDigits = preparedData.slice(0, preparedData.length / 2)
    .split('').reduce((a, b) => +a + +b);
  const rightDigits = preparedData.slice(- preparedData.length / 2)
    .split('').reduce((a, b) => +a + +b);

  return leftDigits === rightDigits;
};

isHappyTicket(11123555532111);


// Меняем регистр
const invertCase = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
};

invertCase('Hello World!');

