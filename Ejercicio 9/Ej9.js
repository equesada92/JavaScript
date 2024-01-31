let tempCelsius = prompt("Por favor introduzca la temperatura en grados Celsius");
function transfTemp(tempCelsius){
    let tempFahrenheit=((tempCelsius*9/5)+32)
    return tempFahrenheit
}
let resultado=transfTemp(tempCelsius);
alert("La temperatura en grados Fahrenheit es: "+resultado);