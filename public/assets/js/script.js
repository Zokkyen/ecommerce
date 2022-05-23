/* Comportement du footer */
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

/* Lecture du JSON au lancement de la page + affichage */
let beersArray = [];
readJson();
console.log(beersArray)

let minusButtons = document.querySelectorAll('.minusButton');
minusButtons.forEach(button =>{
    button.addEventListener('click', function(e){
        numberToDecrease = e.target.dataset.id;
        console.log(numberToDecrease);
    })
})

document.addEventListener('click', function(e){
    numberToDecrease = e.target.dataset.id;
    console.log(numberToDecrease);
})

/* Choix de la catégorie à afficher */
window.addEventListener('click', (event) => {
    if((event.target.id == "allBeersCateg") ||(event.target.id == "blonde") || (event.target.id == "rousse") || (event.target.id == "brune") || (event.target.id == "blanche") || (event.target.id == "triple") || (event.target.id == "ipa") || (event.target.id == "stout") || (event.target.id == "sour") || (event.target.id == "lambic") || (event.target.id == "france") || (event.target.id == "europe") || (event.target.id == "monde") || (event.target.id == "lowAlcool") || (event.target.id == "modAlcool") || (event.target.id == "highAlcool")) {
        displayCtgBeers(event.target.id);
    }
})