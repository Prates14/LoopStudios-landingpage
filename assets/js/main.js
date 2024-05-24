document.addEventListener('click', e => {
    const target = e.target;

    if (target.id === 'iconHamburger') {
        mostraNavegacao(target);
    }
})

function mostraNavegacao(imagem) {
    const logo = document.querySelector('.logo'); //position: fixed <-> static
    const nav = document.querySelector('#mostraNav'); //display: flex <-> none

    if (imagem.src.endsWith("assets/images/icon-hamburger.svg")) {
        imagem.src = "assets/images/icon-close.svg";
        logo.style.position = 'fixed';
        nav.style.display = 'flex';

    } else {
        imagem.src = "assets/images/icon-hamburger.svg";
        logo.style.position = 'static';
        nav.style.display = 'none';
    }
}