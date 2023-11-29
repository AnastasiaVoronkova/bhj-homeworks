const cookie = document.querySelector('#cookie');
const clickerCounter = document.querySelector('#clicker__counter');

cookie.addEventListener('click', () => {
    cookie.width = cookie.width === 200 ? cookie.width = 250 : cookie.width = 200;
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
});