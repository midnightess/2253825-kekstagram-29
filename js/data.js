import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COMMENT_COUNT = 10;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Летняя гроза -редкое и прекрасное явление, которое очень тяжело забыть.',
  'На фотографии показаны просторные леса, прозрачная река, сверкающие молнии, и необъятное небо.',
  'Контраст цветов природы только дополняют такой фантастический вид.',
  'В фотографии видно противостояние молний это очень захватывает и одновременно удивляет, как такие прекрасные явления могут враждовать.',
  'Но это только первое впечатление. Если всмотреться в пейзаж, то можно увидеть в этих двух молниях умиротворение и гармонию.',
  'Но не только молнии удивляют в данном пейзаже. Безграничные леса, делающие атмосферу более простой, но это только усиливает эмоции от увиденного.',
  'А также эта спокойная река. Фотография так и манит разные эмоции и чувства к себе, тем она и не забывается!',
];
const NAMES = [
  'Марк Аврелий', 'Октавиан Август', 'Тиберий', 'Клемент', 'Калигула', 'Клавдий',
];

const generateCommentId = createIdGenerator();

const createMassage = () => Array.from(
  {length: getRandomInteger (1, 2)},
  () => getRandomArrayElement(COMMENT_LINES)
).join(' ');


const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMassage(),
  name: getRandomArrayElement(NAMES),
});

const createPictures = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment,
  ),
});

const getPictures = () =>
  Array.from(
    {length: PICTURE_COUNT},
    (_, pictureIndex) => createPictures(pictureIndex + 1),
  );


export { getPictures };

