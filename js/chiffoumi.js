// Déclaration de trois variables.
let computer;
let player;
let random;

// Récupération du choix du joueur.
player = prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');

// Récupération d'un nombre aléatoire entre 0 et 1 inclus.
random = Math.random();

//test du random
console.log(random);

if(random <= 0.33){
    computer = 'pierre';
}else if(random <= 0.66){
    computer = 'feuille';
}else{
    computer = 'ciseau';
}
document.write("<p>Choix de l'ordinateur : " + computer + '</p>');

if(computer == player){
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}else{
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(computer)
    {
        case 'ciseau':
            if(player == 'pierre'){
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;

        case 'feuille':
            if(player == 'pierre'){
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;

        case 'pierre':
            if(player == 'feuille'){
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
    }
}


// ci-dessous mon travail
// let joueur = prompt("Pierre, Papier, Ciseaux?");
// console.log("Résultat joueur " + joueur);
// let random = Math.random(); 
// let computer;
// if(random <= 0.33){
//     computer = "pierre";
// }else if(random <= 0.66){
//     computer = "feuille";
// }else{
//     computer = "ciseaux";
// }
// console.log("resultat ordinateur " + computer);

// let result;
// if(joueur === computer){
//    console.log(result = "ègalité");
// }else if((joueur === "pierre" && computer === "ciseaux")  || (joueur === "feuille" && computer === "pierre") || (joueur === "ciseaux" && computer === "feuille")){
//     console.log(result = "joueur gagné");
// }else{
//     console.log(result = "joeur perdu");
// }