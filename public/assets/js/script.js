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
let i=0;
let minusButtons = document.querySelectorAll('.minusButton');
// minusButtons.forEach(button =>{
//     button.addEventListener('click', function(e){
//         numberToDecrease = e.target.dataset.id;
//         console.log(numberToDecrease);
//     })
// })
let amountCounterValue = 12;
let specifiedAmount = amountCounterValue;

document.addEventListener('click', function(e){
    let amountCounter = document.querySelectorAll('.displayAmount');

    
    console.log(specifiedAmount.length)
    datasetId = e.target.dataset.id;
    if(/minus/.test(datasetId)){
        let minusId = datasetId.substring(5);

        amountCounter.forEach(element=>{
            let numberId = element.dataset.id.substring(6);
            // let specifiedAmount = amountCounterValue;

            if (minusId == numberId){
                if (specifiedAmount>1){
                    specifiedAmount = specifiedAmount - 1;
                    element.innerHTML = specifiedAmount;
                }else {
                    specifiedAmount = 1;
                    element.innerHTML = specifiedAmount;
                }
            }
            i++;
        })
    }else if(/plus/.test(datasetId)){
            let plusId = datasetId.substring(4);
            amountCounter.forEach(element=>{
                let numberId = element.dataset.id.substring(6);

                if (plusId == numberId){
                    
                    console.log(specifiedAmount)
                    specifiedAmount++
                    element.innerHTML = specifiedAmount;
                }
            })
    }
    else if (/cart/.test(datasetId)){
        let price = 5;
        let cartId = datasetId.substring(4);
        console.log(beersArray);
        beersArray.forEach(jeanlouis=>{
            if(jeanlouis.recent_checkin_id == cartId){
                price = jeanlouis.beer.price;
            }
        })
        let basket = JSON.parse(localStorage.getItem('basket')) ?? [];
        basket.push({"idBeer":cartId,"quantity":amountCounterValue,'price':price})
        localStorage.setItem('basket', JSON.stringify(basket));
    }


})