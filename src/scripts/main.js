hljs.initHighlightingOnLoad();

function sideMenu() {
    const hamburger = document.querySelectorAll('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    console.log(hamburger)
    hamburger.forEach((element) => {
        element.addEventListener('click', (event) => {
            mobileNav.classList.toggle('grid');
            mobileNav.classList.toggle('none');
        })
    })
}

sideMenu();