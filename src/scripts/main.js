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
    const languages = document.querySelector('.admin-panel-main__languages');

    languages.addEventListener('click', (event) => {
        const target = event.target;
        if(target.classList.contains('admin-panel-main__button')) {
            target.nextElementSibling.classList.toggle('hidden');
            target.nextElementSibling.classList.toggle('show');
        }
    })
}

function insertTag() {
    const textarea = document.querySelector('#admin-panel-main__text-chapter');

    const h1Btn = document.querySelector('.admin-panel-main__h1');
    const h2Btn = document.querySelector('.admin-panel-main__h2');
    const h3Btn = document.querySelector('.admin-panel-main__h3');
    const ulBtn = document.querySelector('.admin-panel-main__ul');
    const olBtn = document.querySelector('.admin-panel-main__ol');
    const pBtn = document.querySelector('.admin-panel-main__p');
    const imgBtn = document.querySelector('.admin-panel-main__img');
    const highlightBtn = document.querySelector('.admin-panel-main__highlightjs');
    
    h1Btn.onclick = () => {
        textarea.textContent += '<h1><h1>';
    }

    h2Btn.onclick = () => {
        textarea.textContent += '<h2><h2>';
    }

    h3Btn.onclick = () => {
        textarea.textContent += '<h3><h3>';
    }

    ulBtn.onclick = () => {
        textarea.textContent += '<ul><ul>';
    }

    olBtn.onclick = () => {
        textarea.textContent += '<ol><ol>';
    }

    pBtn.onclick = () => {
        textarea.textContent += '<p><p>';
    }

    imgBtn.onclick = () => {
        textarea.textContent += '<img src="" alt=""><img>';
    }

    highlightBtn.onclick = () => {
        textarea.textContent += '<pre><code class="hljs"></code><pre>';
    }
}


sideMenu();
toggleAdminMenu();
insertTag();