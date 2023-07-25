const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

// Тренировочные функции
// Проверка длины строки
const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 18);

// Палиндром
const isPalindrom = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  return normalizedString === normalizedString.split('').reverse().join('');
};

isPalindrom('Лёша на полке клопа нашёл');

// Извлечение чисел
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('ECMAScript 2023');

// Возвращает исходную строку
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return (actualPad <= 0) ? string : pad.slice (0, actualPad % pad.length)
+ pad.repeat (actualPad / pad.length) + string;
};

myPadStart('q', 4, 'werty');

export { getRandomInteger, getRandomArrayElement, createIdGenerator };

