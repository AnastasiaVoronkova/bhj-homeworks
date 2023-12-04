let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((element, index) => {
    let tagHelp = document.createElement('div');
    tagHelp.classList.add('tooltip');
    element.append(tagHelp);

    element.addEventListener('click', (evt) => {
        evt.preventDefault();

        let item = evt.target.closest('.has-tooltip');
        tagHelp.textContent = item.title;
        tagHelp.classList.toggle('tooltip_active');
    });
});