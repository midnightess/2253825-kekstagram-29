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


// Извлечение чисел (понятный вариант)
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


/* Возвращает исходную строку (вариант 2, с помощью тернарного оператора
  и стрелочной функции) */
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return (actualPad <= 0) ? string : pad.slice(0, actualPad % pad.length)
+ pad.repeat(actualPad / pad.length) + string;
};

myPadStart('q', 4, 'werty');

