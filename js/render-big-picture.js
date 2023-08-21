import { isEscKeydown } from './keydowns.js';

const bigPictureElement = document.querySelector('.big-picture');
const commentElement = document.querySelector('.social__comment');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bigPictureCommentsElement = document.querySelector('.social__comments');
const commentsCounterElement = document.querySelector('.comments-count');
const renderCommentsElement = document.querySelector('.comments-render-count');
const bodyElement = document.querySelector('body');
const bigPictureCloseBtnElement = document.querySelector('.big-picture__cancel');
const COMMENTS_STEP = 5;


const createComment = ({ avatar, name, message }) => {

  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};


const renderComments = (comments, counter) => {

  if (counter >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    counter = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < counter; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  bigPictureCommentsElement.innerHTML = '';
  bigPictureCommentsElement.append(fragment);
  commentsCounterElement.textContent = comments.length;
  renderCommentsElement.textContent = counter;
};


const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => isEscKeydown(evt) && hideBigPicture();
/*const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};
*/

const onCancelButtonClick = () => {
  hideBigPicture();
};

bigPictureCloseBtnElement.addEventListener('click', onCancelButtonClick);

const renderPictureDetails = ({ url, likes, description, }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (picture) => {

  let currentCounter = COMMENTS_STEP;

  bigPictureCommentsElement.classList.remove('hidden');

  commentsLoaderElement.classList.remove('hidden');

  bigPictureElement.classList.remove('hidden');

  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);

  commentsLoaderElement.addEventListener('click', () => {
    currentCounter += COMMENTS_STEP;
    renderComments(picture.comments, currentCounter);
  });

  renderPictureDetails(picture);

  renderComments(picture.comments, COMMENTS_STEP);
};

export { showBigPicture };

