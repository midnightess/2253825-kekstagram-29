// Вариант 1 (через gallery):

import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';

renderGallery(getPictures());

// Вариант 2 (без 3 модуля):
/*
import { getPictures } from './data.js';
import { renderPictures } from './render-thumbnails.js';

renderPictures(getPictures());
*/
