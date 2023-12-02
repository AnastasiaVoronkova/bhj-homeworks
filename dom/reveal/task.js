let reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    setTimeout(() => {
        reveals.forEach(element => {
            let { top, bottom } = element.getBoundingClientRect();
            if (bottom < 0) { return false }
            if (top > innerHeight) { return false }
            return element.classList.add('reveal_active');
        });
    }, 2000);
});