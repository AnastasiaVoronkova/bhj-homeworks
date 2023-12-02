const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

setInterval(() => {
    
    if (index === rotatorCase.length - 1) {
        
        rotatorCase[index].classList.remove('rotator__case_active');
        index = 0;
        rotatorCase[0].classList.add('rotator__case_active');
    }
    
    rotatorCase[index];
    rotatorCase[index].classList.remove('rotator__case_active');
    index++
    rotatorCase[index].classList.add('rotator__case_active');

}, 1000);