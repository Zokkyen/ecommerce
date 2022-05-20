const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

/* Fonction d'ajout du footer quand scroll bas et l'enlever quand scroll haut */
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll >= lastScroll && !body.classList.contains(scrollUp)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollUp)
    ) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
    lastScroll = currentScroll;
});