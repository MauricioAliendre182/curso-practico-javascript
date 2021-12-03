// const precioOriginal = 150;
// const descuento = 17;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// Arrow Funtion
const calculateDiscount = (price, discount) => price - (price*(discount/100))
console.log('El precio final a pagar con el descuento es de ${calculateDiscount(100, 15)} dolarucos')

// Se crean otras dos constantes
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// Podemos pasar un objeto al console log
// console.log({
//     "Precio original": precioOriginal,
//     "Descuento (%)": descuento,
//     "Porcentaje precio con descuento (%) ": porcentajePrecioConDescuento,
//     "Precio con descuento": precioConDescuento
// })

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    console.log(precioConDescuento)
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
