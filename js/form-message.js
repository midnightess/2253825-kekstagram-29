import { isEscKeydown } from './utils.js';

const bodyElement = document.querySelector('body');
const templateSuccessMessage = bodyElement.querySelector('#success').content.querySelector('.success');
const successBtnElement = templateSuccessMessage.querySelector('.success__button');
const templateErrorMessage = bodyElement.querySelector('#error').content.querySelector('.error');
const errorBtnElement = templateErrorMessage.querySelector('.error__button');


const hideModalMessage = () => {
  templateSuccessMessage.classList.add('hidden');
  templateErrorMessage.classList.add('hidden');
};

const handleCloseOnEsc = (evt) => {
  if(isEscKeydown(evt)) {
    evt.preventDefault();
    hideModalMessage();
    document.removeEventListener('keydown', handleCloseOnEsc);
    document.removeEventListener('click', hideModalMessage);
  }
};

const showSuccessMessage = () => {
  bodyElement.append(templateSuccessMessage);
  templateSuccessMessage.classList.remove('hidden');
  document.addEventListener('keydown', handleCloseOnEsc);
};

const showErrorMessage = () => {
  bodyElement.append(templateErrorMessage);
  templateErrorMessage.classList.remove('hidden');
  document.addEventListener('keydown', handleCloseOnEsc);
};

successBtnElement.addEventListener('click', hideModalMessage);
errorBtnElement.addEventListener('click', hideModalMessage);
document.addEventListener('click', hideModalMessage);


export { showSuccessMessage, showErrorMessage };

