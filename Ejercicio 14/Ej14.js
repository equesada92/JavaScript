const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"]
const longMeses=meses.filter(name=>name.length>7).map(name=>name.toUpperCase());
console.log("Los meses con más de 7 letras son: "+longMeses)
const cantidad=longMeses.length;
console.log("La cantidad de meses con más de 7 letras son: "+cantidad)
