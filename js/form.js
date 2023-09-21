import { isEscKeydown, /*showAlert*/ } from './utils.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';
//import { sendData } from './api.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги введены неверно';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const uploadFileElement = bodyElement.querySelector('#upload-file');
const imgOverlayElement = bodyElement.querySelector('.img-upload__overlay');
const cancelBtnElement = bodyElement.querySelector('#upload-cancel');
const hashtagElement = bodyElement.querySelector('.text__hashtags');
const descriptionElement = bodyElement.querySelector('.text__description');
const submitBtnElement = document.querySelector('.img-upload__submit');

const SubmitBtnText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const pristine = new Pristine(formElement, {
  classTo:'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTag = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTag.length === new Set(lowerCaseTag).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagElement,
  validateTags,
  TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const onElementFocus = () =>
  document.activeElement === hashtagElement ||
  document.activeElement === descriptionElement;

const resetAllInModal = () => {
  formElement.reset();
  pristine.reset();
  resetScale();
  resetEffects();
};

const hideModal = () => {
  resetAllInModal();
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  // Если ремуваю эти обработчики, пропадает возможность многократно загружать форму
  // и вообще вылезает ошибка 404
  //uploadFileElement.removeEventListener('change', showModal);
  //cancelBtnElement.removeEventListener('click', hideModal);
  //formElement.removeEventListener('submit', onFormSubmit);
};

const handleCloseOnEsc = (evt) => {
  if(isEscKeydown(evt) && !onElementFocus()) {
    evt.preventDefault();
    hideModal();
    document.removeEventListener('keydown', handleCloseOnEsc);
  }
};

const showModal = () => {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', handleCloseOnEsc);
};


const setupForm = () => {

  uploadFileElement.addEventListener('change', showModal);
  cancelBtnElement.addEventListener('click', hideModal);
  formElement.addEventListener('submit', onFormSubmit);
  descriptionElement.textContent = '';
};

const blockSubmitBtn = () => {
  submitBtnElement.disabled = true;
  submitBtnElement.textContent = SubmitBtnText.SENDING;
};

const unblockSubmitBtn = () => {
  submitBtnElement.disabled = false;
  submitBtnElement.textContent = SubmitBtnText.IDLE;
};
// Вариант из лайва
const setOnFormSubmit = (callback) => {
  formElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitBtn();
      await callback(new FormData(formElement));
      unblockSubmitBtn();
    }
  });
};

// Это вариант из демонстрации
/*
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitBtn();
      sendData(new FormData(evt.target))
        .then(callback)
        .catch((err) => {
          showAlert(err.message);
        }
        )
        .finally(unblockSubmitBtn);
    }
  });
};
*/


export { hideModal, setupForm, setOnFormSubmit };

