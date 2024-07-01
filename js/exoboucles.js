let mois = 0;

for ( let mon_compte = 1000; mon_compte < 2000; mon_compte += 50){
     document.write("<p> ici j'ai " + mon_compte + " mois </p>");
    mois++;    
}
document.write("<p>il me faut" + mois + "mois </p>")

let compte = 1000;
let temps = 0;
while (compte < 2000){
    compte += 50;
    temps++;
}
document.write("<p style='color:blue'>il m'aurait fallu "+ temps + " mois</p>")




// correction vera
let monCompte = 1000;
// let temps = 0; j'ai la double slache pour que je puisse garder la correction de l'exercice
while(monCompte < 2000) {

    monCompte += 50;
    temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + (mois) + " mois</h3>");

// avec une boucle FOR
let tps = 0;
for (var mesSous = 1000; mesSous < 2000 ; mesSous += 50) {
    document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
    tps++;
}
document.write("<h3>Il aura fallu " + tps + " mois.</h3>");