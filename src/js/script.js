import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

// Burger menu

const burger = document.querySelector('.header__menu-wrapper ');
const close = document.querySelectorAll('.gamburger__line');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');

const gamburgerMenu = (btnOpen, btnClose, burger) => {
    const active = 'header__menu-wrapper_active'
    btnOpen.addEventListener('click', () => {
        burger.classList.add(active)
        overlay.classList.add('overlay_active')
        btnClose.forEach(element => {
            if (element.classList.contains('gamburger__line_close')) {
                element.classList.remove('gamburger__line_close')
                burger.classList.remove(active)
                overlay.classList.remove('overlay_active')
            } else {
                element.classList.add('gamburger__line_close')
            }
        });

    })
}

//Slider - work-devices

const swiper = new Swiper(".work-devices__slider-swiper", {
    modules: [Navigation, Pagination],
    effect: "flip",
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        768: {
            slidesPerView: 6,
        }
    },
});

const swiper2 = new Swiper(".happy-clients__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },

    },

});

const swiper3 = new Swiper(".commpleted-orders__slider", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },

    },

});

const swiper4 = new Swiper(".gift__slider-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 4,
        },

    },

});

const swiper5 = new Swiper(".specialists__slider-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: '.swiper-button-prev',
    },
});


gamburgerMenu(menu, close, burger)