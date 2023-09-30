import { sortRandomly, debounce } from './utils.js';


const RANDOMLY_PICTURES_COUNT = 10;

const filterElement = document.querySelector('.img-filters');

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

let currentFilter = Filter.DEFAULT;
let pictures = [];


const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, RANDOMLY_PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];

  }
};

const onFilterClick = (loadedPictures, randerGallery) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const onBtnClick = evt.target;
    if (onBtnClick.id === currentFilter) {
      return;
    }

    filterElement.querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    onBtnClick.classList.add('img-filters__button--active');
    currentFilter = onBtnClick.id;

    const filteredPictures = getFilteredPictures(loadedPictures);
    debounce(() => randerGallery(filteredPictures))();

  });
};

const initFilters = (loadedPictures, randerGallery) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  onFilterClick(loadedPictures, randerGallery);
};


export { initFilters };
