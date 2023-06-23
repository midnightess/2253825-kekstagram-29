// Проверка длины строки
function checkStringLength(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
}

// Палиндром
function isPalindrom (string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = normalizedString.split('').reverse().join('');

  return normalizedString === reversedString;
}

// Извлечение чисел
function extractNumber (string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}

// Возвращает исходную строку
function myPadStart (string, minlength, pad) {
  const actualPad = minlength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad
    / pad.length) + string;
}

