
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMockData() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Опис фотографії ${i}`,
      likes: getRandomNumber(15, 200),
      comments: []
    };

    const commentsCount = getRandomNumber(1, 5);
    const commentAuthors = ['Андрій', 'Олена', 'Максим', 'Ірина', 'Віктор'];
    const commentMessages = [
      'Все відмінно!',
      'Загалом все непогано. Але не всі.',
      'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
      'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
      'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
      'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
    ];

    for (let j = 0; j < commentsCount; j++) {
      const comment = {
        id: getRandomNumber(1, 1000),
        avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
        message: getRandomItem(commentMessages),
        name: getRandomItem(commentAuthors)
      };

      photo.comments.push(comment);
    }

    photos.push(photo);
  }

  return photos;
}
//Відображення фотографій користувача
const mockData = generateMockData();

const picturesBlock = document.querySelector(".pictures");
const pictureTemplate = document.querySelector("#picture");

for (let el of mockData) {
  const picture = pictureTemplate.content.cloneNode(true);
  const image = picture.querySelector(".picture__img");
  const comments = picture.querySelector(".picture__comments");
  const likes = picture.querySelector(".picture__likes");
  image.src = `${el.url}`;
  comments.textContent = `${el.comments.length}`;
  likes.textContent = `${el.likes}`;
  picturesBlock.append(picture);
}
