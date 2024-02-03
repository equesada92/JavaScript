document.getElementsByTagName("button")[0].addEventListener("click",alerta);
function alerta(){
    alert("El documento fue guardado satisfactoriamente")
}

document.getElementsByTagName("input")[0].addEventListener("focus",cambioColor)
function cambioColor(){
    document.getElementsByTagName("input")[0].style.backgroundColor = "yellow";
}
document.getElementsByTagName("input")[0].addEventListener("blur",sinColor)
function sinColor(){
    document.getElementsByTagName("input")[0].style.backgroundColor = "";
}

document.getElementsByTagName("input")[1].addEventListener("input",colorLetra);
function colorLetra(){
    let segundoInput=document.getElementsByTagName("input")[1].value;
    if(segundoInput==="a"||segundoInput==="e"||segundoInput==="i"||segundoInput==="o"||segundoInput==="u"
        ||segundoInput==="A"||segundoInput==="E"||segundoInput==="I"||segundoInput==="O"||segundoInput==="U"){
        document.getElementsByTagName("input")[1].style.color="blue"
        }
    else{
        document.getElementsByTagName("input")[1].style.color="red"
        }
}