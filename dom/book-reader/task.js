let fontSize = document.querySelectorAll('.font-size');
let book = document.querySelector('.book');

fontSize.forEach((element) => {
    element.addEventListener('click', (evt) => {
        evt.preventDefault();
        let item = evt.target.closest('.font-size');

        fontSize.forEach(elem => {
            elem.classList.remove('font-size_active');
        });

        item.classList.add('font-size_active');

        if (item.classList.contains('font-size_small')) {
            smallSize();
        } else if (item.classList.contains('font-size_big')) {
            bigSize();
        } else {
            regularSize();
        }    
    });
});

function smallSize() {
    book.classList.remove('book_fs-big');
    book.classList.add('book_fs-small');
}

function bigSize() {
    book.classList.remove('book_fs-small');
    book.classList.add('book_fs-big');
}

function regularSize() {
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
}