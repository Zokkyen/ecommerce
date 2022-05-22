/* Fonction pour le comportement du footer */
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
body.classList.add(scrollDown);

window.addEventListener('scroll',()=>{
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

/* Lecture du JSON au lancement de la page */
let beersArray = [];
readJson();
// let minusButtons = document.querySelectorAll('.minusButton');
// minusButtons.forEach(button =>{
//     button.addEventListener('click', function(e){
//         numberToDecrease = e.target.dataset.id;
//         console.log(numberToDecrease);
//     })
// })
document.addEventListener('click', function(e){
            numberToDecrease = e.target.dataset.id;
            console.log(numberToDecrease);
})
