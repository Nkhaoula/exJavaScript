//let tour = 1;

//while ( tour <= 10 ) {
    //document.write("<li> C'est le tour de manège n° " + tour + "</li>");
    //tour++;
//}
//function maFonction(tour, nombre){
   // let message = "je suis au $(tour)"
    //document.write("<p>" + message + "</p>");
//}

//let tourUtilisateur = prompt("Donne moi le numero du tour : ");

//numeroTour(tourUtilisateur);
//==> ce qui est en vert c'est mon travail


for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'> c'est la tour de manége n° " + i + "</p>");
}

let tour = 0;
while(tour < 10){
    tour++;
    document.write("<p style='color:green'> c'est la tour de manége n° " + tour + "</p>");
}

let question = parseInt(prompt("combien de tour voulez vous faire?"));
let compteur = 0;
while(compteur < question){
    compteur++;
    document.write("<p style='color:green'> c'est la tour de manége n° " + compteur + "</p>");
}

let nbTour = parseInt(prompt("combien de tour voulez vous faire?"));
for(let compte=1; compte <= nbTour; compte++){
    document.write("<p style='color:pink'> c'est la tour de manége n° " + compte+ "</p>");
}