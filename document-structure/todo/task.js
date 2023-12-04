let tasksList = document.querySelector('.tasks__list');
let tasksControl = document.querySelector('.tasks__control');
let tasksInput = document.querySelector('.tasks__input');

function createElement() {
    let task = document.createElement('div');
    let title = document.createElement('div');
    let remove = document.createElement('a');
    
    task.classList.add('task');
    title.classList.add('task__title');
    remove.classList.add('task__remove');

    title.textContent = tasksInput.value;
    remove.href = '#0';
    remove.innerHTML = '&times';

    task.append(title);
    task.append(remove);
    tasksList.append(task);

    remove.addEventListener('click', () => {
        task.remove();
    });
}

document.querySelector('.tasks__add').addEventListener('click', (evt) => {
    evt.preventDefault();

    createElement();
    tasksControl.reset();
});