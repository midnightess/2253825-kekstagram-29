import { renderPictures } from './render-thumbnails.js';


const picturesContainer = document.querySelector('.pictures');
const renderGallery = (pictures) => {
  renderPictures(pictures, picturesContainer);
};

export { renderGallery };

/* Перетащила в миниатюры слушатель
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
  */
