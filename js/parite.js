
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair")
    }
}

let nb = parseInt(prompt("donne moi un nombre"));
let nbMax = nb + 10;
for(let liste = nb; liste <= nbMax; liste++){
    if (liste % 2 === 0){
        document.write("<p style='color:blue'> c'est un nombre pair " + liste + "</p>");
    }else {
        document.write("<p style='color:blue'> c'est un nombre impair " + liste + "</p>");
    }
}

let chifre = parseInt(prompt("donne moi un nombre"));
let chifreMax = chifre + 10;
while(chifre <= chifreMax){
    if (chifre % 2 === 0){
        document.write("<p style='color:red'> c'est un nombre pair " + chifre + "</p>");
    }else {
        document.write("<p style='color:red'> c'est un nombre impair " + chifre + "</p>");
    }
    chifre++;
}
