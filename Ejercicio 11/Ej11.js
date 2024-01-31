let frase=prompt("Introduzca su frase:")
function MoM(frase){
    if(frase==frase.toLowerCase()){
        return "Su frase está escrita solo en minúsculas"
    }
    else if(frase==frase.toUpperCase()){
        return "Su frase está escrita solo con mayúsculas"
    }
    else {
        return "Su frase tiene mayúsculas y minúsculas"
    }
}
let resultado=MoM(frase)
alert(resultado)