const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const pares=number.filter(function(number){
    return number%2==0
})
const impares=number.filter(function(number){
    return number%2!=0
})
console.log ("El array de número pares es:"+pares);
console.log ("El array de número impares es:"+impares)