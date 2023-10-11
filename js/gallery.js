import { createPicture } from './render-thumbnails.js';
import { showBigPicture } from './render-big-picture.js';

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {

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
export { renderGallery };
