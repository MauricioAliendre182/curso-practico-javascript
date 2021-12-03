// Calcular figuras geometricas
// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado*4;  
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();


// Codigo de Triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

function areaTriangulo (base, altura){
    return (base*altura)/2
}
// console.log("El area del triangulo es: " + areaTriangulo + " cm^2");


console.groupEnd();

// Codigo de Circulo
console.group("Circulo");

// Diametro
function diametroCirculo(radio){
    return radio*2
}

const PI = Math.PI
// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return PI * diametro
}

// Area
function areaCirculo(radio){
    return (radio*radio)*PI
}
console.groupEnd();


// Aqui interactuamos con HTML
function calcularPerimetroCuadrado(){
    // Obtenemos valores del input de HTML
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    // Calculamos el perimetro de cuadrado
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}


function calcularPerimetroTriangulo(){
    // Obtenemos valores del input de HTML
    const lado1 = document.getElementById("InputTrianguloLado1");
    const lado2 = document.getElementById("InputTrianguloLado2");
    const base = document.getElementById("InputTrianguloBase");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;
    // Calculamos el perimetro de cuadrado
    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro);
}
function calcularAreaTriangulo(){
    // Obtenemos valores del input de HTML
    const altura = document.getElementById("InputTrianguloAltura");
    const base = document.getElementById("InputTrianguloBase");
    const value1 = altura.value;
    const value2 = base.value;
    // Calculamos el perimetro de cuadrado
    const area = areaTriangulo(value1, value2)
    alert(area);
}

function calcularPerimetroCirculo(){
    // Obtenemos valores del input de HTML
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;
    // Calculamos el perimetro de cuadrado
    const perimetro = perimetroCirculo(value)
    alert(perimetro);
}

function calcularAlturaTrianguloIso(){
    // Obtenemos valores del input de HTML
    const lado1 = document.getElementById("InputTrianguloIsoLado1");
    const lado2 = document.getElementById("InputTrianguloIsoLado2");
    const base = document.getElementById("InputTrianguloIsoBase");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;
    // Calculamos la altura del triangulo
    if (value1 == value2 & value3 > value1){
        const s = (Number(value1) + Number(value2) + Number(value3))/2
        // Con este calculamos el area
        const area = Math.sqrt(s*(s-value1)*(s-value2)*(s-value3));
        const altura = 2*area/value3;
        alert(altura);
    }
    else{
        alert("Introduce valores iguales para lado1 y lado2 y que no sean mayores a la base")
    }
}