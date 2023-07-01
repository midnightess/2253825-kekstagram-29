// Проверка длины строки (исправила return)
function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('проверяемая строка', 18);


// Палиндром (убрала лишнюю переменную)
function isPalindrom (string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');

  return normalizedString === normalizedString.split('').reverse().join('');
}

isPalindrom('Лёша на полке клопа нашёл');


// Извлечение чисел (1 вариант, мне понятный)
function extractNumber (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}

extractNumber('ECMAScript 2022');


/* Извлечение чисел (2 вариант, максимально сокращенный и не сильно понятный ;))
немного почитала про регулярные выражения */
function getNumber (text) {
  return parseInt(text.toString().replace(/\D/g,''), 10 || NaN,);
}

getNumber('2023 год');


/* Возвращает исходную строку (вариант 2, с помощью тернарного оператора
  и стрелочной функции) */
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return (actualPad <= 0) ? string : pad.slice(0, actualPad % pad.length)
+ pad.repeat(actualPad / pad.length) + string;
};

myPadStart('q', 4, 'werty');


// Счастливый билет
function isHappyTicket (number) {
  const leftDigits = number.toString().slice(0, 3).split('').reduce((a, b) => +a + +b);
  const rightDigits = number.toString().slice(-3).split('').reduce((a, b) => +a + +b);
  if (leftDigits === rightDigits) {
    return true;
  } else {
    return false;
  }
}

isHappyTicket(222222222);


// Меняем регистр
function invertCase (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += string[i].toLowerCase();
    } else if (string[i] === string[i].toLowerCase()) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}

invertCase('helLo WOrld!');
