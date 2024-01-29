const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma=0;
for (let campo=0; campo<9; campo++) {
    suma += notas[campo];
}
console.log("La sumatoria de los números de las notas es:"+suma);

//Ahora utilizaremos for of
let suma2=0
for(const nota of notas){
    suma2+=nota
}
console.log("La sumatoria de los números de las notas es:"+suma2);