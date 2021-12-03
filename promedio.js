// Lista de elementos
// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// Calcular la media

function calcularMediaAritmetica(lista){
    // Ciclo FOR
    
    // let sumaLista  = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }


    // reduce(): recibe una funcion con la cual reducimos una lista
    // esta puede ser una suma de todos los elementos
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista/lista.length
    return promedioLista
}