let nb1 = prompt('1er saisie');
let nb2 = prompt('2eme saisie');

if ((!isNaN(nb1)) && (!isNaN(nb2))) {
    if(nb1 === nb2){
        alert('<p>nb1 et nb2 sont égal');
    }else if (nb1 > nb2){
        alert('nb1 plus grand que nb2');
    }else if (nb1 < nb2){
        alert('nb1 plus petit que nb2');
    }
}else {
    alert("Vous n'avez pas saisi de chiffres!");
} 