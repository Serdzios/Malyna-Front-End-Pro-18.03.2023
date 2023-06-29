import { ImageTags } from './ImageTag.js';
import { getImageInfo } from './getImageInfo.js';
const arrayLengthPictures = 25;
const rangeOfLikes = { min: 15, max: 200 };
const rangeOfComments = { min: 1, max: 20 };
const arrCounter = [];
let countId = 25;
const descriptions = [
  'Володарь', 'Верхи на драконі', 'Зникнув', 'Підтримка', 'Darth Vader', 'NLAW & чоловік', 'Зірковий корабель', 'Косміний Скафандр', 'Darth Maul', 'Кораблекрушение',
  "Підтримка", 'Плащ', 'Авто', 'Великий двигун', 'Протигаз', 'NLAW & жінка', 'Військо', 'Потяг', 'Робот', 'Уламки заводу',
  'Мікроавтобус', 'Променевий меч', 'В лабораторії', 'Велика голова', 'Космодром', 'Космодром'];

const messages = [
  'Все відмінно!',
  'Загалом все непогано. Але не всі.',
  'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
  'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
  'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
  'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];

const avatars = [
  'Sergio', 'Andrii', 'Sebastian', 'Flex', 'Rey', 'John'
]

function getRandomNumber(rangeMin, rangeMax) {
  return Math.floor((Math.random() * (rangeMax - rangeMin) + rangeMin));
}

function getUniqueId() {
  countId += 1
  return countId;
}


function getMessage() {
  const messageId = getRandomNumber(0, messages.length - 1)
  return messages[messageId];
}

function getRandomComments() {
  const commentsRandomCount = getRandomNumber(rangeOfComments.min, rangeOfComments.max);
  const randomComments = [];
  for (let i = 1; i < commentsRandomCount + 1; i++) {
    const avatarId = getRandomNumber(1, avatars.length);
    const randomComment = {
      id: getUniqueId(),
      avatar: `./img/avatar-${avatarId}.svg`,
      name: avatars[avatarId],
      message: getMessage()
    }
    randomComments.push(randomComment);
  }
  return randomComments;
}

const photoConfigs = [];
for (let i = 0; i < arrayLengthPictures; i++) {
  const photoConfig = {
    id: (i + 1),
    url: `./photos/${i + 1}.jpg`,
    descriptions: descriptions[i],
    likes: getRandomNumber(rangeOfLikes.min, rangeOfLikes.max),
    comments: getRandomComments()
  }
  photoConfigs.push(photoConfig);
}

// insertAnchorImageTags
ImageTags(photoConfigs);

// getAnchorImageInfo
const bigPictures = document.querySelector('.big-picture');
const zonePicture = document.querySelector('.pictures')
zonePicture.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains("picture__img")) return

    bigPictures.classList.remove("hidden");
    document.body.style.position = 'fixed';
    const clickFotoId = +evt.target.dataset.id
    const clickPhoto = photoConfigs.find((el) => el.id === clickFotoId);
    getImageInfo(clickPhoto);

})

const zonePictureCancel = document.querySelector('.big-picture__cancel')
zonePictureCancel.addEventListener('click', (evt) => {
  const clickCancel = evt.target
  if (clickCancel) {
    bigPictures.classList.add("hidden");
    document.body.style.position = '';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    bigPictures.classList.add("hidden");
    document.body.style.position = '';
  }
});
