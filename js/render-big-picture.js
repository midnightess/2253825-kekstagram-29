import { isEscKeydown } from './utils.js';

const COMMENTS_STEP = 5;
const bigPictureElement = document.querySelector('.big-picture');
const commentElement = bigPictureElement.querySelector('.social__comment');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bigPictureCommentsElement = bigPictureElement.querySelector('.social__comments');
const commentsCounterElement = bigPictureElement.querySelector('.comments-count');
const renderCommentsElement = bigPictureElement.querySelector('.comments-render-count');
const bodyElement = document.querySelector('body');
const bigPictureCloseBtnElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentFieldElement = document.querySelector('.social__footer');


const createComment = ({ avatar, name, message }) => {

  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};


const renderComments = (comments, counter) => {
  let currentCounter = counter;

  const hendlerLoadComments = () => {
    currentCounter += COMMENTS_STEP;
    renderComments(comments, currentCounter);
  };

  if (counter >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    counter = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
    removeEventListener('click', hendlerLoadComments);
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < counter; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsLoaderElement.addEventListener('click', hendlerLoadComments, {once: true});

  bigPictureCommentsElement.innerHTML = '';
  bigPictureCommentsElement.append(fragment);
  commentsCounterElement.textContent = comments.length;
  renderCommentsElement.textContent = counter;
};

const renderPictureDetails = ({ url, likes, description, }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};


const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  commentFieldElement.reset();
};

const handleCloseOnEsc = (evt) => {
  if(isEscKeydown(evt)) {
    hideBigPicture();
    document.removeEventListener('keydown', handleCloseOnEsc);
  }
};

const showBigPicture = (picture) => {
  bigPictureCommentsElement.classList.remove('hidden');
  commentsLoaderElement.classList.remove('hidden');
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', handleCloseOnEsc);
  bigPictureCloseBtnElement.addEventListener('click', hideBigPicture, {once: true});

  renderPictureDetails(picture);
  renderComments(picture.comments, COMMENTS_STEP);
};

export { showBigPicture };

