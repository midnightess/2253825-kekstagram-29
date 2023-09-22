import { renderGallery } from './gallery.js';
import { hideModal, setupForm, setOnFormSubmit } from './form.js';
import { getData } from './api.js';

// на доработку:
//import {showSuccessMessage, showErrorMessage} from './form-message.js';
//import { showAlert } from './util.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
  });
/* не работает :(
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
*/
setupForm();
setOnFormSubmit(hideModal);

