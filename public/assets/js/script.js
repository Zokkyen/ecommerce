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
let i=0;
let minusButtons = document.querySelectorAll('.minusButton');
// minusButtons.forEach(button =>{
//     button.addEventListener('click', function(e){
//         numberToDecrease = e.target.dataset.id;
//         console.log(numberToDecrease);
//     })
// })

/* Choix de la catégorie à afficher */
window.addEventListener('click', (event) => {
    if((event.target.id == "allBeersCateg") ||(event.target.id == "blonde") || (event.target.id == "rousse") || (event.target.id == "brune") || (event.target.id == "blanche") || (event.target.id == "triple") || (event.target.id == "ipa") || (event.target.id == "stout") || (event.target.id == "sour") || (event.target.id == "lambic") || (event.target.id == "france") || (event.target.id == "europe") || (event.target.id == "monde") || (event.target.id == "lowAlcool") || (event.target.id == "modAlcool") || (event.target.id == "highAlcool")) {
        displayCtgBeers(event.target.id);
    }
})

window.addEventListener('click', (event) => {
    if(event.target.innerText == "Ajouter au panier") {
        var modalAddBasket = new bootstrap.Modal(document.getElementById('modalAddBasket'), {
            keyboard: false
        })
        modalAddBasket.show();
    }
})


/* Gestion de la quantité */
document.addEventListener('click', function(e){
    let amountCounter = document.querySelectorAll('.displayAmount');
    datasetId = e.target.dataset.id;
    if(/minus/.test(datasetId)){
        let minusId = datasetId.substring(5);
        beersArray.forEach(beerElement=>{
            if (beerElement.recent_checkin_id == minusId){
                if (beerElement.count>1){
                    beerElement.count--;
                    }
                amountCounter.forEach(counter=>{
                    let parsedCounterID = counter.dataset.id.substring(6);
                    if(beerElement.recent_checkin_id == parsedCounterID){
                        counter.innerHTML=beerElement.count;
                    }
                })
            }
        })

    }else if(/plus/.test(datasetId)){
            let plusId = datasetId.substring(4);
            beersArray.forEach(beerElement=>{
                if (beerElement.recent_checkin_id == plusId){
                        beerElement.count++;
                    amountCounter.forEach(counter=>{
                        let parsedCounterID = counter.dataset.id.substring(6);
                        if(beerElement.recent_checkin_id == parsedCounterID){
                            counter.innerHTML=beerElement.count;
                        }
                    })
                }
            })
    }
    else if (/cart/.test(datasetId)){
        let price = 5;
        let amount = 1;
        let cartId = datasetId.substring(4);
        beersArray.forEach(jeanlouis=>{
            if(jeanlouis.recent_checkin_id == cartId){
                price = jeanlouis.beer.price;
                amount = jeanlouis.count;
                beerName = jeanlouis.beer.beer_name;
            }
        })
        let basket = JSON.parse(localStorage.getItem('basket')) ?? [];
        basket.push({"beerName":beerName,"idBeer":cartId,"quantity":amount,'price':price})
        localStorage.setItem('basket', JSON.stringify(basket));
    }
})
document.getElementById('openCart').addEventListener('click',updateBasket)
document.getElementById('openCart2').addEventListener('click',updateBasket)
document.getElementById('empty').addEventListener('click', clearBasket)