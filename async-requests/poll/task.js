const title = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.open('GET', url);
xhr.send();

xhr.addEventListener('load', () => {
    const data = xhr.response;
    callback(data);
});

const callback = (data) => {
    title.textContent = data.data.title;
    const answers = data.data.answers;
    
    renderButton(answers);
    handleClickButton();
}

const createButton = (element) => {
    
  const button = document.createElement('button');

    button.classList.add('poll__answer');
    button.textContent = element;
    button.type = 'button';

    pollAnswers.append(button);
}

const renderButton = (answers) => {
    answers.forEach(element => {
        createButton(element);
    });
}

const handleClickButton = () => {
    document.querySelectorAll('.poll__answer').forEach(element => {
        element.addEventListener('click', () => {
            alert('Ваш голос учтён');
        });
    });
}