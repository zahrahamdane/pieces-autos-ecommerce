// Recuperer des pieces depuis le fichier JSON
const reponse =  await fetch('pieces-autos.json');
const pieces = await reponse.json();

for(let i = 0 ; i < pieces.length; i++){
    // Recuperation de l'element du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");

    // Creation d'une balise qui dediee a une piece automobile
    const pieceElement = document.createElement("article");

    // Creation les elements produits
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "(Aucune categorie)";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment";

    const stockElement = document.createElement("p");
    stockElement.innerText = pieces[i].disponibilite ? "En stock" : "En repture de stock";

    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);

    // On rattache les elements a la balise article
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}

// Réordonner les éléments de la liste en fonction de leur prix
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return a.prix - b.prix;
    });
    // piecesOrdonnees.sort((a,b) => a.prix - b.prix);
    console.log(piecesOrdonnees);
});

// Filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

// Filtrer la liste des pièces pour n’afficher que celles qui ont une description
const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");
boutonFiltrerDescription.addEventListener("click", function(){
    const piecesAvecDescription = pieces.filter(function(piece){
        return piece.description;
    });
    console.log(piecesAvecDescription);
});

// Trier par prix decroissant
const boutonTrierPrixDecroissant = document.querySelector(".btn-trier-prix-decroissant");
boutonTrierPrixDecroissant.addEventListener("click", function(){
    const piecesPrixDecroissant = Array.from(pieces);
    piecesPrixDecroissant.sort(function(a,b){
        return b.prix - a.prix;
    });
    console.log(piecesPrixDecroissant);
});



