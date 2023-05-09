
const inputField = document.querySelector('input');
const divElement = document.querySelector('div');


inputField.addEventListener('focus', function() {
    divElement.style.display = 'block';
});


inputField.addEventListener('blur', function() {
    divElement.style.display = 'none';
});
