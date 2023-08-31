import { renderPictures } from './render-thumbnails.js';

const picturesContainer = document.querySelector('.pictures');
const renderGallery = (pictures) => {
  renderPictures(pictures, picturesContainer);
};

export { renderGallery };
