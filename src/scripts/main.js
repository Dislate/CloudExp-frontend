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

function toggleAdminMenu() {
    const buttons = document.querySelectorAll('.admin-panel-main__button');
    const list = document.querySelector('.admin-panel-main__parts');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            list.classList.toggle('show');
            list.classList.toggle('hidden');
        });
    })
}

sideMenu();
toggleAdminMenu();