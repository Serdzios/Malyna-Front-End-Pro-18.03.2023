function getPost() {
    const postId = document.getElementById('postId').value;


    if (postId < 1 || postId > 100) {
        alert('Введіть ід від 1 до 100');
        return;
    }


    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetchPost(url)
        .then((post) => {
            displayPost(post);
            return post;
        })
        .then((post) => {
            const commentsButton = document.createElement('button');
            commentsButton.innerText = 'Отримати коментарі';
            commentsButton.onclick = () => getComments(post.id);
            document.getElementById('postContainer').appendChild(commentsButton);
        })
        .catch((error) => {
            alert('Сталася помилка. Спробуйте ще раз.');
            console.error(error);
        });
}

function fetchPost(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Помилка запиту до API');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
    postContainer.appendChild(postElement);
}

function getComments(postId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Помилка запиту до API');
            }
            return response.json();
        })
        .then((comments) => {
            displayComments(comments);
        })
        .catch((error) => {
            alert('Сталася помилка. Спробуйте ще раз.');
            console.error(error);
        });
}