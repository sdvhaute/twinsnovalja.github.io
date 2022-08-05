// Navbar

const nav = document.querySelector('.nav');
const navArrow = document.querySelector('.nav-arrow');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

navArrow.addEventListener('click', () => {
    nav.classList.toggle('full');
    navArrow.classList.toggle('rotate-arrow');
    navArrow.classList.toggle('full-arrow');
    menu.classList.toggle('menu-hidden');
    logo.classList.toggle('logo-hidden');

})



// Gallery Carousel

const prevButton = document.querySelector('.left-button')
const nextButton = document.querySelector('.right-button')

const carouselLeft = document.querySelector('.carousel-left');
const carouselMiddle = document.querySelector('.carousel-middle');
const carouselRight = document.querySelector('.carousel-right');

const imagesLeft = carouselLeft.querySelectorAll('.images');
const imagesMiddle = carouselMiddle.querySelectorAll('.images');
const imagesRight = carouselRight.querySelectorAll('.images');



const lengthImages = carouselMiddle.querySelectorAll('.images').length - 1;

let activeSlideIndex = 0

let prevSlide = lengthImages;
let nextSlide = activeSlideIndex + 1;


nextButton.addEventListener('click', () => {
    if (lengthImages === activeSlideIndex) {
        activeSlideIndex = 0;
    } else {
        activeSlideIndex++;
    }
    if (lengthImages === prevSlide) {
        prevSlide = 0;
    } else {
        prevSlide++;
    }
    if (lengthImages === nextSlide) {
        nextSlide = 0;
    } else {
        nextSlide++;
    }

    pickImage();
})
prevButton.addEventListener('click', () => {
    if (activeSlideIndex === 0) {
        activeSlideIndex = lengthImages;
    } else {
        activeSlideIndex--;
    }
    if (prevSlide === 0) {
        prevSlide = lengthImages;
    } else {
        prevSlide--;
    }
    if (nextSlide === 0) {
        nextSlide = lengthImages;
    } else {
        nextSlide--;
    }

    pickImage();
})

function pickImage() {



    imagesMiddle.forEach((image, imgIndex) => {
        if (imgIndex === activeSlideIndex) {
            image.classList.remove('img-hidden');
        } else {
            image.classList.add('img-hidden');
        }
    })
    imagesLeft.forEach((image, imgIndex) => {
        if (imgIndex === prevSlide) {
            image.classList.remove('img-hidden');
        } else {
            image.classList.add('img-hidden');
        }
    })
    imagesRight.forEach((image, imgIndex) => {
        if (imgIndex === nextSlide) {
            image.classList.remove('img-hidden');
        } else {
            image.classList.add('img-hidden');
        }
    })
    
}


// // Scroll to top

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
