import { renderGallery } from './gallery.js';
import { onHideModal, setupForm, setOnFormSubmit } from './form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { showSuccessMessage, showErrorMessage } from './form-message.js';
import { initFilters, onFilterClick } from './filters.js';


getData()
  .then((pictures) => {
    renderGallery(pictures);
    initFilters(pictures);

    onFilterClick(debounce(renderGallery));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


const onSendFormSuccess = () => {
  onHideModal();
  showSuccessMessage();
};

const onSendFormError = () => {
  showErrorMessage();
};

setupForm();
setOnFormSubmit(onSendFormSuccess, onSendFormError);

