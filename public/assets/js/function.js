// Fonction de lecture du JSON
let readJson = () => {
    fetch('public/assets/json/untappd.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        /*
            Retourner les valeurs souhaitées du JSON dans un tableau d'objet

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
        alert("Erreur du chargement du JSON")
    });
}


// Fonction affichage de toutes les bières contenues dans le JSON / Tableau d'objet
let displayAllBeers = () => {
    console.log(beersArray)

    beersArray.forEach(jeanlouis=>{
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
                <div class="addButtons">
                    <button class="minusButton" data-id="${jeanlouis.beer.recent_checkin_id}">-</button>
                    <div class = "displayAmount" data-id="${jeanlouis.beer.recent_checkin_id}">12</div>
                    <button class="plusButton" data-id="${jeanlouis.beer.recent_checkin_id}">+</button>
                </div>
            </div>
        </div>`
    })
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
    numberToDecrease = event.target.dataset.id;

}
function countAdd(event){
    numberToIncrease = event.target.dataset.id;
}

// Fonction affichage des bières selon une catégorie (catégories définies par un ID)
let displayCtgBeers = (id) => {
/*
    Affichage des bières avec la photo, le nom, le prix et la contenance
*/
}

// Fonction incrément de la quantité d'un article avec son id sur le site
let addArticle = (id) => {

}

// Fonction décrément de la quantité d'un article en fonction de son id sur le site
let remArticle = (id) => {
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
let displayFalseAdding = () => {

}

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

// Fonction fermeture du panier à l'affichage
let closeBasket = () => {

}