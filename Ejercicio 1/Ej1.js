const volumen=16*23*13
console.log('Volumen:',volumen,'cm3');

//Area Total=2Al+2Ab
//Area lateral=2(13*23+16*13)

const areaLateral=2*(13*23+16*13);
const areaBase=23*16;
const areaTotal=2*areaLateral+2*areaBase;
console.log('Área Total:',areaTotal,'cm2');

//Generalizando por medio de variables
const largo=23
const ancho=16
const altura=13

const volumen2=largo*ancho*altura
console.log('Volumen:',volumen2,'cm3');

const areaLateral2=2*(altura*largo+altura*ancho);
const areaBase2=largo*ancho;
const areaTotal2=2*areaLateral2+2*areaBase2;
console.log('Área Total:',areaTotal2,'cm2')