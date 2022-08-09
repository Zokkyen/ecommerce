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

        // if((imageExists(jeanlouis.beer.beer_label)) && (jeanlouis.beer.beer_label != "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png")) {
        // if(imageExists(jeanlouis.beer.beer_label)) {
            document.getElementById('product').innerHTML +=
                `<div class="col-6 col-lg-2 col-md-3 beer">
                    <img class="beerLabel" src="public/assets/img/nolonger.png">
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
        // }
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
    basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('basketTable').innerHTML='';
    if (basket != null){
    basket.forEach(e=>{
        console.log(e.beerName);
        document.getElementById('basketTable').innerHTML+=
        `<tr>
            <td class="text-uppercase">${e.beerName}</td>
            <td>${e.quantity} unités</td>
            <td>${e.price}€</td>
            <td>${e.idBeer}</td>
        </tr>
        `

    })
    document.getElementById('total').innerHTML = totalPriceBasket() + '€';
}

}

let clearBasket = () =>{
    localStorage.clear();
    updateBasket();
    document.getElementById('total').innerHTML='';
}

// Fonction mise à jour du prix total du panier
let totalPriceBasket = () => {
    let total = 0;
    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket == null){
        total = 0;
        return 0

    }else{
    basket.forEach(element => {
        total += Number(element.price)*Number(element.quantity);
    })
    return total
};
}

// Fonction fermeture du panier à l'affichage
let closeBasket = () => {

}