// Вариант 1 (через gallery):

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = ({ url, description, comments, likes, id }) => {

  const pictureElement = picturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.thumbnailId = id;

  return pictureElement;
};


const renderPictures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createPicture(picture);
    picturesFragment.append(thumbnail);
  });
  picturesContainer.append(picturesFragment);
};

export { renderPictures };

// Вариант 2 (без 3 модуля):
/*
import { showBigPicture } from './render-big-picture.js';

const picturesContainer = document.querySelector('.pictures');
// Шаблон, содержимое шаблона
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = (picture) => {
  const { url, description, comments, likes} = picture;

  const pictureElement = picturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  const openBigPicture = () => pictureElement.addEventListener(
    'click', showBigPicture(picture)
  );

  pictureElement.addEventListener('click', openBigPicture);

  return pictureElement;
};

const renderPictures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createPicture(picture);
    picturesFragment.append(thumbnail);
  });
  picturesContainer.append(picturesFragment);
};

export { renderPictures };
*/
