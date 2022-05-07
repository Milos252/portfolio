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
    let btns = document.querySelectorAll('.header ul li a');

    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
        btns.forEach((btn) => {
            btn.style.border = 'none';
        });
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
        btns.forEach((btn) => {
            btn.style.border = '2px solid rgb(110, 110, 110)';
        });
    }
});

let validateForm = () => {
    const nameInput = document.querySelector('#ime').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#poruka').value;
    let success = document.querySelector('#success');
    let error = new Boolean(true);

    if (nameInput.length < 1) {
        alert('Moraš unijeti ime!');
    }

    if (email.length < 1) {
        alert('Moraš unijeti email!');
    }

    if (message.length < 1) {
        alert('Moraš unijeti poruku!');
    }

    success.innerText = 'Poslato!';
};
