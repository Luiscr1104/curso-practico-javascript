// Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado= 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado= ladoCuadrado*4;
console.log("El perimetro del cuadrado mide: "+perimetroCuadrado+"cm");

const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado mide: "+areaCuadrado+"cm'2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
console.log("Los lados del triangulo miden: "+ladoTriangulo1+"cm, "+ ladoTriangulo2+"cm, "+ baseTriangulo+"cm ");
const alturaTriangulo= 5.5;
console.log("La altura del triangulo mide: "+alturaTriangulo+"cm");
const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo mide: "+perimetroTriangulo+"cm");
const areaTriangulo= (baseTriangulo*alturaTriangulo)/2;
console.log("El area del Triangulo mide: "+areaTriangulo+"cm'2");
console.groupEnd();

//Codigo Circulos
/*
console.group("Circulos");
function diametroCirculo(radio){
    return radio*2;
}
const PI= Math.PI;
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*PI;
}
function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd();*/