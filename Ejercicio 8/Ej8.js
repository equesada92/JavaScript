let mensaje="Bienvenidos";
function eliminarConsonantes(mensaje){
    const separar=mensaje.split("")
    let fraseSinCons="";
    for(letra of separar){
        if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"||letra=="A"||letra=="E"||letra=="I"||letra=="O"||letra=="U"){
            fraseSinCons+=letra
        }
    }
    return fraseSinCons
}
let resultado=eliminarConsonantes(mensaje);
console.log(resultado);