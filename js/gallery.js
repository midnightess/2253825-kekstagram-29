import { renderThumbnails } from './render-thumbnails.js';
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
    // сравниваем элемент со значением дата атрибута, преобразуем в число
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });
  renderThumbnails(pictures, picturesContainer);
};

export { renderGallery };
/*

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      // сравниваем элемент со значением дата атрибута, преобразуем в число
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  renderThumbnails(pictures, container);
};

export { renderGallery };

/import { renderThumbnails } from './thumbnail.js';
/import { showBigPicture } from './fullsize.js';
/const container = document.querySelector('.pictures');

*/
