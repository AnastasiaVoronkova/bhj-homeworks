let tabs = Array.from(document.querySelectorAll('.tab'));
let tabContents = Array.from(document.querySelectorAll('.tab__content'));

document.querySelector('.tab__navigation').addEventListener('click', (evt) => {
    let tab = evt.target.closest('.tab');
    if (!tab) { return }

    tabs.forEach(element => {
        element.classList.remove('tab_active');
    });

    tab.classList.add('tab_active');

    let tabIndex = tabs.findIndex((el) => {
        return el.classList.contains('tab_active');
    });

    tabContents.forEach((el, index) => {
        el.classList.remove('tab__content_active');
        if (index === tabIndex) {
            el.classList.add('tab__content_active');
        }
    });
});