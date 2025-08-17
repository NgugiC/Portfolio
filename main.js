// Portfolio project


const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.main-menu');

//  Toggle Menu
menuToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('menu-visible');
    menuToggler.classList.toggle('menu-visible');
    document.querySelector('.menu-modal-container').classList.toggle('hidden');

    if(menu.classList.contains('menu-visible')){
        menu.removeAttribute('inert');
    }
    else {
        menu.setAttribute('inert');     //The inert attribute disables all interactivity/focus inside an element
    }
}

if(visualViewport >= 1200){
    menu.removeAttribute('inert');
}

// Spacebar toggle menu
menuToggler.addEventListener('keydown', (e) => {
    if(e.key === '' || e.code === 'Space' || e.keyCode === 32){
        e.preventDefault();
        toggleMenu();
    }
});

//  Close menu by clicking an any part of the viewport
document.onclick = (e) => {
    if(!menuToggler.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('menu-visible');
        menuToggler.classList.remove('menu-visible');
        document.querySelector('.menu-modal-container').classList.add('hidden');
    }
};

document.querySelector('#personal-statement').innerHTML = `I specialize in creating visually appealing, responsive, and user-friendly websites that bring ideas to life on the browser. I transform design concepts into interactive digital experiences using HTML, CSS and JavaScript.<br><br>My focus is on clean, maintainable code and seamless user interfaces that work across all devices. Whether it's building dynamic single-page applications or optimizing site performance, I ensure every detail enhances user experience and meets the project goals.`;

// Dynamic Copyright Year
document.querySelector('#year').innerHTML = new Date().getFullYear();