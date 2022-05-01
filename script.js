let logoClick = () => {
    console.log('refresh');
};

let btnS = document.querySelectorAll('#projekti-dugmad button');

btnS.forEach((button) => {
    button.addEventListener('click', () => {
        let category = button.getAttribute('data-category');
        let portfolioItems = document.querySelectorAll(
            '.portfolio-single-item'
        );

        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        if (category === 'sve') {
            portfolioItems.forEach((item) => {
                item.style.display = 'block';
            });
        }

        portfolioItems.forEach((item) => {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        });
    });
});

let naslovDugme = document.querySelector('.header button');
naslovDugme.addEventListener('click', () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
});
