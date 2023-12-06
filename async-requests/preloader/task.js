let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
let items = document.querySelector('#items');
let loader = document.querySelector('#loader');

let xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.open('GET', url);

xhr.send();

xhr.addEventListener('error', (error) => {
    console.log(error);
});

xhr.addEventListener('load', () => {
    let data = xhr.response;
    callback(data);
});

let callback = (data) => {
    let objectArr = [];
    let object = Object.keys(data.response.Valute);
    object.forEach(element => {
        objectArr.push(
            {
                charCode: data.response.Valute[element].CharCode,
                name: data.response.Valute[element].Name,
                value: data.response.Valute[element].Value,
            }
        );
    });

    renderElement(objectArr);
}

let createElement = ({ charCode, name, value }) => {
    let element = document.createElement('div');
    element.classList.add('item');

    let charCodeElement = document.createElement('div');
    charCodeElement.classList.add('item__code');
    charCodeElement.textContent = charCode;

    let nameElement = document.createElement('div');
    nameElement.classList.add('item__currency');
    nameElement.textContent = name;

    let valueElement = document.createElement('div');
    valueElement.classList.add('item__value');
    valueElement.textContent = value;

    element.append(charCodeElement, nameElement, valueElement);
    items.append(element);
}

let renderElement = (arr) => {
    arr.forEach(object => {
        createElement(object);
    });

    loader.classList.remove('loader_active');
}