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
