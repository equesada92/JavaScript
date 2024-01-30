const numeros= [1,2,3,4,5,6]
function sumaNumerosPares(numeros){
    let Suma=0;
   for (const elementoArray of numeros) {
    if(elementoArray%2==0){
        Suma+=elementoArray
    }
   }
   return Suma;
}
const resultado=sumaNumerosPares(numeros);
console.log("La sumatoria de los números pares es: "+resultado);
