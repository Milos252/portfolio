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

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
};

const moveRight = () => {
    displayNone();
    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
};

const moveLeft = () => {
    displayNone();
    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
};

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

let btnS = document.querySelectorAll('.portfolio-categories button');

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

let dugme = document.querySelectorAll('.modal-section button');
let dugmeDva = document.querySelectorAll('.popup-modal button');
let popUpModal = document.querySelectorAll('.popup-modal');

dugme.forEach((dugme) => {
    dugme.addEventListener('click', () => {
        let dataCategory = dugme.getAttribute('data-category');
        let modalWindow = document.querySelector(
            `.popup-modal[data-category="${dataCategory}"]`
        );
        let overlay = document.querySelector('.overlay');

        console.log(modalWindow);

        modalWindow.style.display = 'block';
        overlay.style.display = 'block';
    });
});

dugmeDva.forEach((dugme) => {
    dugme.addEventListener('click', () => {
        let dataCategory = dugme.getAttribute('data-category');
        let modalWindow = document.querySelector(
            `.popup-modal[data-category=${dataCategory}]`
        );
        let overlay = document.querySelector('.overlay');

        modalWindow.style.display = 'none';
        overlay.style.display = 'none';
    });
});
