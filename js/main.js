import { renderGallery } from './gallery.js';
import { hideModal, setupForm, setOnFormSubmit } from './form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { showSuccessMessage, showErrorMessage } from './form-message.js';
import { initFilters, getFilteredPictures } from './filters.js';


getData()
  .then((pictures) => {
    renderGallery(pictures);
    initFilters(pictures);

    getFilteredPictures(debounce(
      () => renderGallery(pictures)));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


const onSendFormSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendFormError = () => {
  showErrorMessage();
};

setupForm();
setOnFormSubmit(onSendFormSuccess, onSendFormError);
