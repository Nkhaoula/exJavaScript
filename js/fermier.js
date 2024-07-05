function nbAnimaux(poulets, vaches, chevaux){
    return poulets + vaches + chevaux;
}

function nbPattes(nbPoulets, nbVaches, nbChevaux){
    return nbPoulets * 2 + (nbVaches + nbChevaux) * 4;
}

let userPoulets = parseInt(prompt('vous avez combien de poulets?'));
let userVaches = parseInt(prompt('vous avez combien de vaches?'));
let userChevaux = parseInt(prompt('vous avez combien de chevaux?'));

let resultNbanimaux = nbAnimaux(userPoulets, userVaches, userChevaux);
let resultNbpattes = nbPattes(userPoulets, userVaches, userChevaux);
document.write(`<p> Vous avez ${resultNbanimaux} animaux et ${resultNbpattes} pattes </p>`)