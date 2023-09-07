import { isEscKeydown } from './utils';
import { resetEffects } from './effects';
import { resetScale } from './scale';

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const cancelBtnElement = document.querySelector('#upload-cancel');
const hashtagElement = document.querySelector('.text__hashtags');
const descriptionElement = document.querySelector('.text__description');

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги введены неверно';

const pristine = new Pristine(formElement, {
  classTo:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

// проверяем хэштэги на уникальность
// new Set проверяет на наличие совпадений
// свойсвто size возвращает количество элементов коллекции Set
const hasUniqueTags = (tags) => {
  const lowerCaseTag = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTag.length === new Set(lowerCaseTag).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim());
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
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

const closeModal = () => {
  resetAllInModal();
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

const handleCloseOnEsc = (evt) => {
  if(isEscKeydown(evt) && !onElementFocus()) {
    evt.preventDefault();
    closeModal();
    document.removeEventListener('keydown', handleCloseOnEsc);
  }
};

const showModal = () => {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', handleCloseOnEsc, {once: true});
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};
const setupForm = () => {

  uploadFileElement.addEventListener('change', showModal, {once: true});
  cancelBtnElement.addEventListener('click', handleCloseOnEsc, {once: true});
  formElement.addEventListener('submit', onFormSubmit, {once: true});

  pristine.addValidator(
    hashtagElement,
    validateTags,
    TAG_ERROR_TEXT
  );
};

export { setupForm };

