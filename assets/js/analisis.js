// Funciones Helper
function esPar(numero){
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista){    
    let sumaLista  = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista/lista.length
    return promedioLista
}


// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
  }


// Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%
// splice(2, 3) = va a la posicion 2 y elimina 3 elementos
// [1,2,3,4,5].splice(2,2) = [1,2,5]

const spliceStart = parseInt(salariosColSorted.length * 0.9);  // Debe iniciar en 90%
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});