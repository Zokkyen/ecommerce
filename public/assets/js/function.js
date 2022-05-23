// Fonction de lecture du JSON
let readJson = () => {
    fetch('public/assets/json/untappd.json')
    .then(response => {
        return response.json();
    })
    .then(data => {

        /*
            - id                    : data.response.beers.items[i].recent_checkin_id     (nombre entier)
            - nom de la bouteille   : data.response.beers.items[i].beer.beer_name        (texte)
            - nom de la Brasserie   : data.response.beers.items[i].brewery.brewery_name  (texte)
            - degré d'alcool        : data.response.beers.items[i].beer.beer_abv         (nombre flotant)
            - type de bière         : data.response.beers.items[i].beer.beer_style       (texte)
            - prix                  : data.response.beers.items[i].beer.price            (nombre entier)
            - contenance            : data.response.beers.items[i].beer.capacity         (nombre entier)
            - logo bouteille        : data.response.beers.items[i].beer.beer_label       (texte)
        */
        beersArray = data.response.beers.items;
        displayAllBeers();
        return beersArray;
    })
    .catch(err => {
        console.log("Erreur du chargement du JSON");
    });
}

// Fonction de check si l'image est disponible
function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('GET', image_url, false);
    http.send();
    return http.status != 403;
}

// Fonction affichage de toutes les bières contenues dans le JSON / Tableau d'objet
let displayAllBeers = () => {
    beersArray.forEach(jeanlouis=>{

        //if((imageExists(jeanlouis.beer.beer_label)) && (jeanlouis.beer.beer_label != "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png")) {
        if(imageExists(jeanlouis.beer.beer_label)) {
            document.getElementById('product').innerHTML +=
                `<div class="col-6 col-lg-2 col-md-3 beer">
                    <img class="beerLabel" src="${jeanlouis.beer.beer_label}">
                    <div class="beerSpecsContainer">
                        <div class="beerName">${jeanlouis.beer.beer_name}</div>
                        <div class="beerType">${jeanlouis.beer.beer_style}</div>
                        <div class="priceCapacity">
                            <div class="beerPrice">${jeanlouis.beer.price}€</div>
                            <div class="beerCapacity">${jeanlouis.beer.capacity}cL</div>
                        </div>

                        <div class="functionalities">
                            <div class="addButtons">
                            <button class="minusButton btn btn-dark" data-id="minus${jeanlouis.recent_checkin_id}">
                                <img data-id="minus${jeanlouis.recent_checkin_id}" src="public/assets/img/minus.svg">
                            </button>
                            <div class="displayAmount" data-id="number${jeanlouis.recent_checkin_id}">${jeanlouis.count}</div>
                            <button class="plusButton btn btn-dark" data-id="plus${jeanlouis.recent_checkin_id}">
                                <img data-id="plus${jeanlouis.recent_checkin_id}" src="public/assets/img/plus-svgrepo-com.svg">
                            </button>
                        </div>

                        <button class="btn btn-dark" data-id="cart${jeanlouis.recent_checkin_id}">Ajouter au panier</button>
                    </div>
                </div>`
        }

    })
    console.clear();
}

function changeAmountButton(){
    let minusButtons = document.querySelectorAll('.minusButton')
    minusButtons.forEach(button =>{
        button.addEventListener('click', countRemove())
    })
    let plusButtons = document.querySelectorAll('.minusButton')
    plusButtons.forEach(button =>{
        button.addEventListener('click', countAdd())
    })
}

function countRemove(event){
}

function countAdd(event){
    numberToIncrease = event.target.dataset.id;
}

// Fonction affichage des bières selon une catégorie (catégories définies par un ID)
let displayCtgBeers = (id) => {
    let beersArrayCateg = document.getElementsByClassName('beer');
    for (const [key, value] of Object.entries(beersArrayCateg)) {

        // Obtenir l'id des bières pour le foreach des catégories pays et degré
        let idOfBeer = value.lastElementChild.childNodes[7].childNodes[3].attributes[1].value.split('cart');

        // Toutes les bières
        if(id == "allBeersCateg") {
            value.style.display = "flex";
        }

        /* Affichage suivant le type de bière */
            // Catégorie Blonde
            if(id == "blonde"){
                if((value.lastElementChild.childNodes[3].innerText == "Witbier") || (value.lastElementChild.childNodes[3].innerText == "Hefeweizen") || (value.lastElementChild.childNodes[3].innerText == "Lager") || (value.lastElementChild.childNodes[3].innerText == "Pale Lager") || (value.lastElementChild.childNodes[3].innerText == "American Light Lager") || (value.lastElementChild.childNodes[3].innerText == "Vienna Lager") || (value.lastElementChild.childNodes[3].innerText == "Pale Lager") || (value.lastElementChild.childNodes[3].innerText == "American Blonde Ale") || (value.lastElementChild.childNodes[3].innerText == "Dunkel Munich Lager") || (value.lastElementChild.childNodes[3].innerText == "Saison / Farmhouse Ale") || (value.lastElementChild.childNodes[3].innerText == "Golden Ale") || (value.lastElementChild.childNodes[3].innerText == "Bock") || (value.lastElementChild.childNodes[3].innerText == "Saison") || (value.lastElementChild.childNodes[3].innerText == "Farmhouse Ale") || (value.lastElementChild.childNodes[3].innerText == "Harvest Ale")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Rousse
            if(id == "rousse"){
                if((value.lastElementChild.childNodes[3].innerText == "Scotch Ale / Wee Heavy") || (value.lastElementChild.childNodes[3].innerText == "Irish Red Ale")  || (value.lastElementChild.childNodes[3].innerText == "American Red Ale")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Brune
            if(id == "brune"){
                if((value.lastElementChild.childNodes[3].innerText == "American Brown Ale") || (value.lastElementChild.childNodes[3].innerText == "Belgian Strong Dark Alen")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Blanche
            if(id == "blanche"){
                if((value.lastElementChild.childNodes[3].innerText == "American Pale Wheat Ale") || (value.lastElementChild.childNodes[3].innerText == "Winter Warmer")  || (value.lastElementChild.childNodes[3].innerText == "Dunkelweizen")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Triple
            if(id == "triple"){
                if((value.lastElementChild.childNodes[3].innerText == "American Strong Ale")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie IPA
            if(id == "ipa"){
                if((value.lastElementChild.childNodes[3].innerText == "White IPA") || (value.lastElementChild.childNodes[3].innerText == "Imperial / Double IPA")  || (value.lastElementChild.childNodes[3].innerText == "American IPA") || (value.lastElementChild.childNodes[3].innerText == "Belgian IPA") || (value.lastElementChild.childNodes[3].innerText == "English IPA") || (value.lastElementChild.childNodes[3].innerText == "American Pale Ale") || (value.lastElementChild.childNodes[3].innerText == "Black IPA") || (value.lastElementChild.childNodes[3].innerText == "IPL (India Pale Lager)") || (value.lastElementChild.childNodes[3].innerText == "English Pale Ale") || (value.lastElementChild.childNodes[3].innerText == "American Pale Ale")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Stout
            if(id == "stout"){
                if((value.lastElementChild.childNodes[3].innerText == "Porter") || (value.lastElementChild.childNodes[3].innerText == "Baltic Porter")  || (value.lastElementChild.childNodes[3].innerText == "Imperial Stout") || (value.lastElementChild.childNodes[3].innerText == "Oatmeal Stout")) {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Sour
            if(id == "sour"){
                if(value.lastElementChild.childNodes[3].innerText == "Sour") {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

            // Catégorie Lambic
            if(id == "lambic"){
                if(value.lastElementChild.childNodes[3].innerText == "Cider") {
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            }

        /* Affichage suivant le pays */
        if(id == "france"){
            beersArray.forEach(element => {
                if((element.brewery.country_name == "France") && (Number(idOfBeer[1]) == element.recent_checkin_id)){
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            });
        }

        if(id == "europe"){
            //console.log(beersArray)
            beersArray.forEach(element => {
                if((element.brewery.country_name == "Germany") && (Number(idOfBeer[1]) == element.recent_checkin_id)){
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            });
        }

        if(id == "monde"){
            beersArray.forEach(element => {
                if(((element.brewery.country_name == "United States") || (element.brewery.country_name == "Mexico") || (element.brewery.country_name == "Thailand")) && (Number(idOfBeer[1]) == element.recent_checkin_id)){
                    value.style.display = "flex";
                }
                else {
                    value.style.display = "none";
                }
            });
        }

        /* Affichage suivant le degré d'alcool */

        if(id == "lowAlcool"){
        }
        if(id == "modAlcool"){
        }
        if(id == "highAlcool"){
        }
    }
}

// Fonction incrément de la quantité d'un article avec son id sur le site
let addQuantity = (id) => {
}

// Fonction décrément de la quantité d'un article en fonction de son id sur le site
let remQuantity = (id) => {
/*
    Doit empêcher la valeur de la quantité en dessous de 0
*/
}

// Fonction décrément de la quantité d'un article en fonction de son id sur le site
let confirmAdding = (id) => {
    /*
        Fonction ajout d'un article par son ID et la fonction retourne true ou false "en fonction des stocks"
    */

    /* Exemple d'ajout en localStorage
    [
        {
            "idBeer": 80,
            "quantity": 1,
            "price": "5",
        }
    ]
    */

    return true;
}

// Fonction affichage confirmation d'ajout d'un article
let displayTrueAdding = () => {

}

// Fonction affichage problème d'ajout d'un article
/*let displayFalseAdding = () => {
}*/

// Fonction ajout de l'article par son id dans le localStorage
let addArticleToBasket = (id) => {

}

// Fonction supprimer de l'article par son id dans le localStorage
let remArticleToBasket = (id) => {

}

// Fonction mise à jour de l'affichage du panier en fonction des données du localStorage
let updateBasket = () => {

}

// Fonction mise à jour du prix total du panier
let totalPriceBasket = () => {
    let total = 0;
    let basket = JSON.parse(localStorage.getItem('basket'))
    basket.forEach(element => {
        total =+ Number(element.price)*Number(element.quantity);
    });
    return total
}

// Fonction vider la panier
let remBasket = () => {
    /*
        Supprimer le contenu du localStorage et raffraichir l'affichage du panier
    */
}