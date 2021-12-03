// Creamos un objeto con todas las posibles opciones para los cupones
// const coupons = [
//     'No tengo',
//     '10%',
//     '20%',
//     '50%'
// ]

function calcularPrecioConDescuento(precio, cupon){
    const porcentajePrecioConDescuento = 100 - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputCoupons = document.getElementById("InputCoupons");
    const priceValue = inputPrice.value;
    const couponsValue = inputCoupons.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponsValue)
    console.log(precioConDescuento)
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}