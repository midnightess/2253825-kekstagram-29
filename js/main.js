import { renderGallery } from './gallery.js';
import { hideModal, setupForm, /*setOnFormSubmit*/ } from './form.js';
import { getData, /*sendData*/ } from './api.js';
//import { showAlert } from './util.js';
//import { showSuccessMessage, showErrorMessage } from './form-message.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
  });
/*.catch(
    (err) => {
      showAlert(err.message);
    }
  );
*/
setupForm(hideModal);

// Вариант, предложенный академией на лайве
/*const pictureList = getPictures();
renderGallery(pictureList);
setupForm();

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
  setupForm(data);
} catch (err) {
  showAlert(err.message);
}
*/
