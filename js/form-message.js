import { isEscKeydown } from './utils.js';

const bodyElement = document.querySelector('body');
const templateSuccessMessage = bodyElement.querySelector('#success').content.querySelector('.success');
const successBtnElement = templateSuccessMessage.querySelector('.success__button');
const templateErrorMessage = bodyElement.querySelector('#error').content.querySelector('.error');
const errorBtnElement = templateErrorMessage.querySelector('.error__button');


const onHideModalMessage = () => {
  templateSuccessMessage.classList.add('hidden');
  templateErrorMessage.classList.add('hidden');
};


const onEscClick = (evt) => {
  if(isEscKeydown(evt)) {
    evt.preventDefault();
    onHideModalMessage();
    document.removeEventListener('keydown', onEscClick);
  }
};


const showSuccessMessage = () => {
  bodyElement.append(templateSuccessMessage);
  templateSuccessMessage.classList.remove('hidden');
  document.addEventListener('keydown', onEscClick);
  successBtnElement.removeEventListener('click', onHideModalMessage);
};


const showErrorMessage = () => {
  bodyElement.append(templateErrorMessage);
  templateErrorMessage.classList.remove('hidden');
  document.addEventListener('keydown', onEscClick);
  errorBtnElement.removeEventListener('click', onHideModalMessage);
};


successBtnElement.addEventListener('click', onHideModalMessage);
errorBtnElement.addEventListener('click', onHideModalMessage);
document.addEventListener('click', onHideModalMessage);


export { showSuccessMessage, showErrorMessage };
