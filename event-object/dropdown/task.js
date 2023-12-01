let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownList.addEventListener('click', (evt) => {
    evt.preventDefault();
    let item = evt.target;
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.remove('dropdown__list_active');
});