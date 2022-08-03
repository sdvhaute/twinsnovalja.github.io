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

const arrowLefts = document.querySelectorAll('.arrow-left');
const arrowRights = document.querySelectorAll('.arrow-right');

const galleryItems = document.querySelectorAll('.gallery-items');

let currentIndex = 0;
let nextIndex = currentIndex + 1;
let prevIndex = currentIndex - 1;

arrowRights.forEach((arrowRight) => {
    arrowRight.addEventListener('click', () => {
        arrowRight.parentElement.children[0].children[currentIndex].classList.remove('gallery-active');
        arrowRight.parentElement.children[0].children[nextIndex].classList.add('gallery-active');

        prevIndex = currentIndex;
        currentIndex = nextIndex;
        if (nextIndex === arrowRight.parentElement.children[0].children.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }
    })
})
arrowLefts.forEach((arrowLeft) => {
    arrowLeft.addEventListener('click', () => {
        arrowLeft.parentElement.children[0].children[currentIndex].classList.remove('gallery-active');
        arrowLeft.parentElement.children[0].children[prevIndex].classList.add('gallery-active');

        nextIndex = currentIndex;
        currentIndex = prevIndex;
        if (prevIndex === 0) {
            prevIndex = arrowLeft.parentElement.children[0].children.length - 1;
        } else {
            prevIndex = currentIndex - 1;
        }
    })
})


// Scroll to top

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
