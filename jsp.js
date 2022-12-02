console.log ()
let cantidad,precio,descuento,compra,pagar;
precio = parseFloat(prompt("Ingrese Precio"));
cantidad = parseFloat(prompt("Ingrese Cantidad"));

compra = precio*cantidad;
descuento = compra*0.15;
pagar = compra-descuento;

document.write("El Descuento es:"+descuento)
document.write("<br>El Total a Pagar es:"+pagar)
