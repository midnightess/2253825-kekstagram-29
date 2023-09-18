import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';


const pictureList = getPictures();
renderGallery(pictureList);
setupForm();


