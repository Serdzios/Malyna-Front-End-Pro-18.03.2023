

export function uploadFoto() {
  const textDescription = document.querySelector('.text__description');
  textDescription.setAttribute('maxlength', 140);

  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const bodyTag = document.querySelector('.body');
  imgUploadOverlay.classList.remove('hidden');
  bodyTag.classList.add('modal-open');

  const uploadCancel = document.querySelector('#upload-cancel');
  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      imgUploadOverlay.classList.add("hidden");
      bodyTag.classList.remove('modal-open');
    }
  });

  const arrMaxCount = 5;
  const elementLengthMax = 20;
  const message = {
    textEnterInfo: 'введіть данні',
    textHashtagMax: `не можна вказати більше п'яти хеш-тегів`,
    textLengthMax: `максимальна довжина одного хеш-тегу 20 символів, включаючи ґрати`,
    textNoDubleEl: `один і той же хеш-тег не може бути використаний двічі`,
    textNumAndStr: `рядок після ґрат має складатися з літер і чисел і не може містити прогалини`,
    textStartHeshtag: 'хеш-тег починається із символу # (грати)',
    textHeshtagDoble: 'хеш-тег може складатися тільки з одного ґрат'
  };

  function isValidHashtag(str) {
    return /^[A-Z0-9А-ЯІЇЁЄҐъыь'Єє#]+$/i.test(str);
  }

  function setCustomValidityInText(outputText) {
    textHashtags.setCustomValidity(outputText);
    textHashtags.reportValidity();
  }

  const textHashtags = document.querySelector('.text__hashtags');
  textHashtags.addEventListener('input', (evt) => {
    const inputTextHashtags = evt.target.value;
    const arrTextHashtags = inputTextHashtags
      .split(' ')
      .map(el => el.toLowerCase())
      .filter(el => el);

    if (arrTextHashtags.length === 0) {
      setCustomValidityInText(message.textEnterInfo);
      return;
    }

    if (arrTextHashtags.length > arrMaxCount) {
      setCustomValidityInText(message.textHashtagMax);
      return;
    }

    const uniqueHashtags = new Set(arrTextHashtags);
    if (uniqueHashtags.size !== arrTextHashtags.length) {
      setCustomValidityInText(message.textNoDubleEl);
      return;
    }

    for (const hashtag of arrTextHashtags) {
      if (hashtag[0] !== '#') {
        setCustomValidityInText(message.textStartHeshtag);
        return;
      }
      const trimmedHashtag = hashtag.slice(1);
      if (trimmedHashtag === '#') {
        setCustomValidityInText(message.textHeshtagDoble);
        return;
      }
      if (trimmedHashtag.length > elementLengthMax) {
        setCustomValidityInText(message.textLengthMax);
        return;
      }
      if (!isValidHashtag(trimmedHashtag)) {
        setCustomValidityInText(message.textNumAndStr);
        return;
      }
    }

    setCustomValidityInText('');
  });
}

