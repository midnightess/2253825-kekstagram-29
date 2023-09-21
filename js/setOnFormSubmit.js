import { formElement, pristine } from './form.js';

const setOnFormSubmit = (onSuccess /*callback*/) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://28.javascript.pages.academy/kekstagram/data',
        {
          method: 'POST',
          bodyElement: formData,
        }
        /*formElement.addEventListener('submit', async (evt) => {
          evt.preventDefault();

          const isValid = pristine.validate();
          if (isValid) {
            blockSubmitBtn();
            await callback(new FormData(formElement));
            unblockSubmitBtn();
          }*/
      );
    }
  });
};
