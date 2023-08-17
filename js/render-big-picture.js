const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseBtnElement = document.querySelector('.big-picture__cancel');
const bigPictureCommentsElement = document.querySelector('.social__comments');
// Тут косяк:
const commentCountElement = document.querySelector('.social__comment-count');
// и тут
const commentsCountElement = document.querySelector('.comments-count');
const commentsShownCountElement = document.querySelector('.comments-shown-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
// Может эту константу в utils.js?
const bodyElement = document.querySelector('body');
//
const COMMENTS_STEP = 5;

let commentsShown = 0;
let comments = [];

//
const createComment = ({ avatar, name, message }) => {
  const comment = commentCountElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};
// и тут косяк (((
const renderComments = () => {
  commentsShown += COMMENTS_STEP;
  //
  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }
  bigPictureCommentsElement.innerHTML = '';
  bigPictureCommentsElement.append(fragment);
  commentsShownCountElement.textContent = commentsShown;
  commentsCountElement.textContent = comments.length;
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onEscKeydown);
};
// Закрытие с помощью esc универсальная функция, мб в utils.js и назову isEscKeydown(pressed)?
const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};
//
const onCancelButtonClick = () => {
  hideBigPicture();
};
const onCommentsLoaderClick = () => renderComments();

bigPictureCloseBtnElement.addEventListener('click', onCancelButtonClick);
commentsCountElement.addEventListener('click', onCommentsLoaderClick);

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  commentsCountElement.classList.add('hidden');
  document.addEventListener('keydown', onEscKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

export { showBigPicture };

// мб 'modal-open' и 'hidden' вынести в utils.js?


