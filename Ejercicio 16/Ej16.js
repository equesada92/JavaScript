class cuadrado{
    constructor(lado){
        this.lado=lado
    }
    perimetro(){
        return 4*this.lado   
    };
    area(){
        return this.lado*this.lado
    };
};
const cuadrado1=new cuadrado(2)
const cuadrado2=new cuadrado(5)
const cuadrado3=new cuadrado(10)

console.log("El perimetro del primer cuadrado es: "+cuadrado1.perimetro()+". Y el área es: "+cuadrado1.area());
console.log("El perimetro del segundo cuadrado es: "+cuadrado2.perimetro()+". Y el área es: "+cuadrado2.area());
console.log("El perimetro del tercer cuadrado es: "+cuadrado3.perimetro()+". Y el área es: "+cuadrado3.area());
