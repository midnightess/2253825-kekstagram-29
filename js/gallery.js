// Вариант 1 (через gallery):

import { renderPictures } from './render-thumbnails.js';
import { showBigPicture } from './render-big-picture.js';

// Эта константа повторяется, такая же в модуле render-thumbnails, надо выносить куда-то?
// или просто назвать по-другому, например container?

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {

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
  renderPictures(pictures, picturesContainer);
};

export { renderGallery };

