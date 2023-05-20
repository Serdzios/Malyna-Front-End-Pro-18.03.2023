
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 10,
        inCart: 0
    },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        price: 25,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}


function onLoadCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');


    if (productNumbers) {

        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);


    if (productNumbers) {

        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }


    setItems(product);


    totalCost();
}


function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {

            cartItems = {
                ...cartItems,
                [product.tag]: {
                    ...product,
                    dateAdded: new Date().toLocaleString() // Додати дату та час додавання продукту
                }
            }
        }


        cartItems[product.tag].inCart += 1;
    } else {

        product.inCart = 1;
        cartItems = {
            [product.tag]: {
                ...product,
                dateAdded: new Date().toLocaleString() // Додати дату та час додавання продукту
            }
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost() {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cartCost = 0;


    if (cartItems) {

        Object.values(cartItems).forEach(item => {
            cartCost += item.price * item.inCart;
        });
    }


    localStorage.setItem("totalCost", cartCost);
}


function removeItem(tag) {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);


    let cartCost = localStorage.getItem('totalCost');

    const item = cartItems[tag];
    const itemTotal = item.price * item.inCart;


    cartCost -= itemTotal;


    delete cartItems[tag];

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("totalCost", cartCost);
    localStorage.setItem('cartNumbers', Object.keys(cartItems).length);


    displayCart();


    totalCost();
}


function displayCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);


    let productContainer = document.querySelector(".products");


    let cartCost = localStorage.getItem('totalCost');


    if (cartItems && productContainer) {

        productContainer.innerHTML = '';


        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <ion-icon class="close-product" name="close-circle-outline" data-tag="${item.tag}"></ion-icon>
                    <span>${item.name}</span>
                    <span class="date-added">Added: ${item.dateAdded}</span> <!-- Відображення дати та часу додавання продукту -->
                </div>
                <div class="price">${item.price},00</div>
                <div class="quantity">
                    <ion-icon class="decrement" name="caret-back-circle-outline" data-tag="${item.tag}"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon class="increment" name="caret-forward-circle-outline" data-tag="${item.tag}"></ion-icon>
                </div>
                <div class="total">
                    $${item.inCart * item.price},00
                </div>
            `;
        });


        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4>
            </div>
        `;


        const closeIcons = document.querySelectorAll('.close-product');
        closeIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const tag = icon.getAttribute('data-tag');
                removeItem(tag);
            });
        });


        const incrementButtons = document.querySelectorAll('.increment');
        incrementButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tag = button.getAttribute('data-tag');
                changeQuantity(tag, 1);
            });
        });


        const decrementButtons = document.querySelectorAll('.decrement');
        decrementButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tag = button.getAttribute('data-tag');
                changeQuantity(tag, -1);
            });
        });
    }
}


function changeQuantity(tag, amount) {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);


    if (cartItems && cartItems[tag]) {

        const item = cartItems[tag];
        item.inCart += amount;
        if (item.inCart < 1) {
            item.inCart = 1;
        }


        localStorage.setItem("productsInCart", JSON.stringify(cartItems));


        displayCart();
    }
}


onLoadCartNumbers();
displayCart();



