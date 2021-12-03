function calcularMediaCuadratica(lista){
    let elevarCuadrado = lista.map(elemento => elemento**2)
    const sumaLista = elevarCuadrado.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )

    const mediaCuadratica = Math.sqrt(sumaLista/lista.length)
    
    return mediaCuadratica
}