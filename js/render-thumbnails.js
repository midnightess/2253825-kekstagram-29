// Контейнер для изображений
const picturesContainer = document.querySelector('.pictures');
// Шаблон, содержимое шаблона
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Функция для заполнения миниатюры по шаблону
const createThumbnail = ({ url, description, comments, likes, id }) => {
  // Клонирование шаблона
  const pictureElement = picturesTemplate.cloneNode(true);
  // Превью фото
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.thumbnailId = id;

  return pictureElement;
};

// Функция для создания миниатюр
const renderThumbnails = (pictures) => {
  const picturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    picturesFragment.append(thumbnail);
  });
  picturesContainer.append(picturesFragment);
};

export { renderThumbnails };
