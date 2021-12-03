
function buttonUtilidadNeta() {
    const inputProducto = document.getElementById("InputProducto");
    const inputPrecio = document.getElementById("InputPrecio");
    const inputCosto = document.getElementById("InputCosto");
    const inputGasto = document.getElementById("InputGasto");
    const inputImpuestos = document.getElementById("InputImpuestos");

    const productoValue = parseInt(inputProducto.value);
    const precioValue = parseInt(inputPrecio.value);
    const costoValue = parseInt(inputCosto.value);
    const gastoValue = parseInt(inputGasto.value);
    const impuestoValue = parseInt(inputImpuestos.value);

    
    const utilidadBruta = (productoValue*precioValue) - (productoValue*costoValue)
    const utilidadOperativa = utilidadBruta - gastoValue
    const utilidadNeta = utilidadOperativa * ((100 - impuestoValue)/100)

    const resultUtility = document.getElementById("utilidadNeta");
    resultUtility.innerText = "La utilidad neta es: $" + utilidadNeta

}