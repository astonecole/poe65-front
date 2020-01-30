/**
 * @param {string} selector 
 * @param {string} target 
 */
function toggleMenu(selector, target) {
    const hamburger = document.querySelector(selector);
    const targetElement = document.querySelector(target);

    hamburger.addEventListener('click', e => {
        targetElement.classList.toggle('toggle');
    });
}
