import { showBigPicture } from './render-big-picture.js';

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

  const renderedPictureList = picturesContainer.querySelectorAll('.picture');
  renderedPictureList.forEach((picture) => picture.remove());

  pictures.forEach((picture) => {
    const thumbnail = createPicture(picture);
    picturesFragment.append(thumbnail);
  });

  picturesContainer.append(picturesFragment);

  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
};

export { renderPictures };
