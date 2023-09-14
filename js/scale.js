const SCALE_STEP = 25;
const MIN_STEP = 25;
const MAX_STEP = 100;
const DEFAULT_SCALE = 100;

const smallerBtnElement = document.querySelector('.scale__control--smaller');
const biggerBtnElement = document.querySelector('.scale__control--bigger');
const contollValueElement = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview img');

const scaleImg = (value) => {
  imgElement.style.transform = `scale(${value / 100})`;
  contollValueElement.value = `${value}%`;
};

const onSmallerBtnClick = () => {
  const currentValue = parseInt(contollValueElement.value, 10);
  let newValue = currentValue - SCALE_STEP;

  if (newValue < MIN_STEP) {
    newValue = MIN_STEP;
  }
  scaleImg(newValue);
};

const onBiggerBtnClick = () => {
  const currentValue = parseInt(contollValueElement.value, 10);
  let newValue = currentValue + SCALE_STEP;

  if (newValue > MAX_STEP) {
    newValue = MAX_STEP;
  }
  scaleImg(newValue);
};

smallerBtnElement.addEventListener('click', onSmallerBtnClick);
biggerBtnElement.addEventListener('click', onBiggerBtnClick);

const resetScale = () => scaleImg(DEFAULT_SCALE);

export { resetScale };


