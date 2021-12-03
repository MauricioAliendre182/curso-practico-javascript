function calcularDescuento(precio, descuento) {
    let montoDescuento = precio * (descuento/100);
    return precio - montoDescuento;
}

// Interaccion con HTML
function calcular() {
    let precio = parseFloat(document.getElementById('precio').value);
    let descuento = parseFloat(document.getElementById('descuento').value);
    precioFinal = calcularDescuento(precio, descuento);
    document.getElementById('resultado').innerText = precioFinal;
}