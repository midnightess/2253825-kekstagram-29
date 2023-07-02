// Извлечение чисел (2 вариант + убрала || NaN)
function getNumber (text) {
  return parseInt(text.toString().replace(/\D/g,''), 10);
}

getNumber('2023 год');

// Счастливый билет
function isHappyTicket (number) {
  if (number.toString().length % 2 !== 0) {
    return false;
  }
  const leftDigits = number.toString().slice(0, number.toString().length / 2)
    .split('').reduce((a, b) => +a + +b);
  const rightDigits = number.toString().slice(-number.toString().length / 2)
    .split('').reduce((a, b) => +a + +b);

  return leftDigits === rightDigits;
}
isHappyTicket(11123555532111);


// Меняем регистр
function invertCase (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}

invertCase('Hello World!');

