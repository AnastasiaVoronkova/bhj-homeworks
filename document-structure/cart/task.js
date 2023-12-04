let product = document.querySelectorAll('.product');
let cartProducts = document.querySelector('.cart__products');
let productAdd = document.querySelectorAll('.product__add');
let productQuantityValue = document.querySelectorAll('.product__quantity-value');
let productImage = document.querySelectorAll('.product__image');

function createElement(img, id, count) {
    let arrProducts = Array.from(cartProducts.querySelectorAll('.cart__product'));
    let arrElement = arrProducts.find(elem => elem.dataset.id === id);
    
    if (arrElement) {
        let sum = arrElement.querySelector('.cart__product-count');
        sum.textContent = Number(sum.textContent) + Number(count);
        
    } else {
        let wrapper = document.createElement('div');
        let image = document.createElement('img');
        let counter = document.createElement('div');

        wrapper.classList.add('cart__product');
        wrapper.dataset.id = id;
        image.classList.add('cart__product-image');
        image.src = img;
        counter.classList.add('cart__product-count');
        counter.textContent = count;

        wrapper.append(image);
        wrapper.append(counter);

        cartProducts.append(wrapper);
    }
}

product.forEach(element => {
    element.addEventListener('click', (event) => {
        let item = event.target;
        let parentElement = item.closest('.product');
        
        if (item.classList.contains('product__quantity-control_inc')) {
            let itemValueNext = item.previousElementSibling;
            itemValueNext.textContent = Number(itemValueNext.textContent) + 1;
        }

        if (item.classList.contains('product__quantity-control_dec')) {
            let itemValuePrevious = item.nextElementSibling;

            if (Number(itemValuePrevious.textContent) === 0) {
                return
            }

            itemValuePrevious.textContent = Number(itemValuePrevious.textContent) - 1;
        }

        if (item.classList.contains('product__add')) {
            let image = parentElement.querySelector('.product__image').src;
            let counter = parentElement.querySelector('.product__quantity-value').textContent.trim();
            let id = parentElement.dataset.id;
            createElement(image, id, counter);
        }
    });
});