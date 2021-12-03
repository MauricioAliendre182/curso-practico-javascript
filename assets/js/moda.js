const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    1,
    2,
    4,
    4,
    3,
    2,
    1,
    1,
]

// Creamos un objeto vacio
const lista1Count = {};

function calcularModa (lista) {
    // El metodo map recorre la lista
    lista.map(
        function(elemento) {
            // Ver si un elemento ya existe dentro de lista1Count
            if(lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    )
    // Lo que hacemos ahora es transformar el objeto a un array (lista1Count)
    // Luego ordenamos el array
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    );
    const moda = lista1Array[lista1Array.length - 1];
    return moda
}


// Segunda forma de hacerlo
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop()
}


console.log(mode(NUMBERS));