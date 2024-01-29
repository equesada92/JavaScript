var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Por favor introduzca su numero de DNI:");
let letraDNI= prompt("Introduzca la letra de su DNI:")
let letraDNI2 = dni%23;
    let letraC= letras[letraDNI2]
if (dni<0 || dni>99999999){
    alert("El DNI indicado no es válido");
} 
    else if(letraDNI!=letraC){
        alert("La letra de su DNI es incorrecta");
    }
        else
        {
            alert("Su número de DNI es correcto")
        }