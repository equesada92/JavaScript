const enlaces = document.getElementsByTagName('a');

const penultimoEnlace = enlaces[enlaces.length-2].href;

const tercerParrafo = document.getElementById('third-paragraph')
const enlacesTercer= tercerParrafo.getElementsByTagName('a');

const mensaje= "El número de enlaces del documento es: "+enlaces.length+"<br>"+
"La direccion del penúltimo enlace es: "+penultimoEnlace+"<br>"+
"El número de enlaces en el tercer párrafo es: "+enlacesTercer.length;

const resultados=document.createElement("div");
resultados.innerHTML= mensaje
document.body.appendChild(resultados)