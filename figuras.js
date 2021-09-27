// Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado*lado;
}
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+ lado2+ base;
}
function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

console.groupEnd();

//Codigo Circulos
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
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputLadosTriangulo");
    const lados = input.value;

    const input = document.getElementById("InputBaseTriangulo");
    const base = input.value;

    const perimetro = perimetroTriangulo(lados, lados, base);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const input= document.getElementById("InputBaseTriangulo");
    const value= input.value;

    const area= areaTriangulo(value);
    alert(area);
}