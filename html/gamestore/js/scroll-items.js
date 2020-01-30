/**
 * @param {string} selector 
 */
function scrollItems(selector) {
    var items = document.querySelectorAll(selector);

    items.forEach(item => {
        item.addEventListener('focus', function () {
            var rect = item.getBoundingClientRect();
            var y = rect.top - (rect.height + 60) + window.scrollY;

            window.scroll({
                top: y,
                behavior: 'smooth'
            });
        });
    });
}