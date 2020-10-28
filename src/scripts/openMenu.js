const openMenu = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu-section');
    hamburger.classList.toggle('hamburger-menu--open');
    menu.classList.toggle('menu--open');
}

export default openMenu