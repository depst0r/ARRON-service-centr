import '/src/sass/style.scss';

// Burger menu

const burger = document.querySelector('.header__menu-wrapper ');
const close = document.querySelectorAll('.gamburger__line');
const menu = document.querySelector('.header__menu');

const gamburgerMenu = (btnOpen, btnClose, burger) => {
    const active = 'header__menu-wrapper_active'
    btnOpen.addEventListener('click', () => {
        burger.classList.add(active)
        // document.body.style.overflow = 'hidden'
        btnClose.forEach(element => {
            if (element.classList.contains('gamburger__line_close')) {
                element.classList.remove('gamburger__line_close')
                burger.classList.remove(active)
            } else {
                element.classList.add('gamburger__line_close')
            }
        });

    })
}

gamburgerMenu(menu, close, burger)