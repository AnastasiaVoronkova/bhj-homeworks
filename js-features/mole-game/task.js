let hole = document.querySelectorAll('.hole');
let moleKilled = document.querySelector('#dead');
let miss = document.querySelector('#lost');

for (let i = 0; i < hole.length; i++) {
    hole[i].addEventListener('click', () => {
        if (hole[i].classList.contains('hole_has-mole')) {
            moleKilled.textContent = Number(moleKilled.textContent) + 1;
        } else {
            miss.textContent = Number(miss.textContent) + 1;
        }

        if (Number(moleKilled.textContent) === 10) {
            alert('Вы выиграли');
            moleKilled.textContent = 0;
            miss.textContent = 0;
        }

        if (Number(miss.textContent) === 5) {
            alert('Вы проиграли');
            moleKilled.textContent = 0;
            miss.textContent = 0;
        }
    });
}