const lista1 = [
    23,
    2,
    100,
    24,
    12
];

function calcularMediaAritmetica(lista){    
    let sumaLista  = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista/lista.length
    return promedioLista
}

function calcularMediana(lista){
    lista.sort((a,b) => a-b)
    
}

// parseInt es para transformar a un entero un numero con decimales y lo
// redondea al inmediato superior
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Creamos la variable llamado mediana
let mediana;

// Necesitamos validar que la cantidad de elementos de la lista es par o 
function calcularMediana(lista){
    lista.sort((a,b) => a-b)
    if (esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
    
        // Sacamos el promedio
        const calcularPromedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
    
        mediana = calcularPromedioElemento1y2;
        return mediana
    
    } else {
        mediana = lista1[mitadLista1]
        return mediana
    }
}