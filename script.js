const d = document;

//Formulario
const formulario = d.querySelector(".formulario");

//A comprar
const totalCompraOro = d.querySelector(".total-compra-oro");
const totalCompraPlata =d.querySelector(".total-compra-plata");

//Item
const itemsAVender = d.querySelector(".items-a-vender");

//A vender
const totalVentaOro = d.querySelector(".total-venta-oro");
const totalVentaPlata = d.querySelector(".total-venta-plata");

//Calcular
const botonCalcular = d.querySelector(".boton-calcular");

//Total
const mostrarTotal = d.querySelector(".total");

//Crear Div dinamico
const divResultados = d.createElement("div");
const lista = d.createElement("ul");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const aComprarOro = totalCompraOro.value;
  const aComprarPlata = totalCompraPlata.value;
  const totalCompra = aComprarOro.concat(".", aComprarPlata);
  // console.log(totalCompra);

  const items = itemsAVender.value;

  const ventaOro = totalVentaOro.value;
  const ventaPlata = totalVentaPlata.value;
  const totalVenta = ventaOro.concat(".", ventaPlata);

  const calcularVenta = items * totalVenta;
  // console.log(calcularVenta);
  const descuento = (calcularVenta * 5) / 100;
  // console.log(descuento);
  const totalConDescuento = calcularVenta - descuento;
  // console.log(totalConDescuento);

  // Eliminar la clase anterior negativo o positivo
  mostrarTotal.classList.remove("texto-perdida", "texto-ganancia");

  const final = totalConDescuento - totalCompra;

  function esNegativo(final) {
    return final < 0;
  }

  if (esNegativo(final)) {
    mostrarTotal.classList.add("texto-perdida");
  } else {
    mostrarTotal.classList.add("texto-ganancia");
  }

  //Limpiar la lista anterior
  divResultados.innerHTML = "";

  //Lista nueva
  lista.innerHTML = `<li>Precio al comprar: ${totalCompra}</li>
  <li>Precio de venta: ${calcularVenta}</li>
  <li>Con descuento del 5%: ${totalConDescuento.toFixed(2)}</li>`;

  //Agregar lista nueva
  divResultados.appendChild(lista);

  //Mostrar total
  mostrarTotal.innerHTML = `Total: ${final.toFixed(2)}`;

  formulario.appendChild(divResultados);
})
