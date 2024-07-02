let pierre;
let feuille;
let ciseau;


let nombre1 = 5;
let nombre2 = 3;

console.log("n1 = " + nombre1);
document.write("<h3>Résultat :<br />n1 = " + nombre1 + "</h3>");
console.log("n2 = " + nombre2);
document.write("<h3>n2 = " + nombre2 + "</h3>");

let vide = nombre1;
nombre1 = nombre2;
nombre2 = vide;

console.log("n1 = " + nombre1);
document.write("<h3>n1 = " + nombre1 + "</h3>");
console.log("n2 = " + nombre2);
document.write("<h3>n2 = " + nombre2 + "</h3>");



let prix;
let resultat;

prix = prompt("Entrez votre prix hors tva : ");
resultat = prix * 1.2
console.log(resultat);


let nb = parseInt(prompt("donne moi un nombre"));
let nbMax = nb + 10;
for(let liste = nb; liste <= nbMax; liste++){
    if (liste % 2 === 0){
        document.write("<p style='color:blue'> c'est un nombre pair " + liste + "</p>");
    }else {
        document.write("<p style='color:blue'> c'est un nombre impair " + liste + "</p>");
    }
}