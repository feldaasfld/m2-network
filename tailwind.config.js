// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


// hamburger
const hamburger =  document.querySelector('#hamburger');
const nav_menu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    nav_menu.classList.toggle('hidden');
});

