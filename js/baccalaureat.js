let note = parseFloat(prompt("qu'elle est t'as moyenne ?")) ;

if (note < 10 ){
    alert("tu est recalé !"); 
} else if ((note >= 10) && (note < 12)){
    alert(" tu passe");
} else if ((note >= 12 ) && (note <= 20 )){
    alert("Bravo pour la mentions");
}else {
    alert("tu doit me donnez entre 0 est 20");
}