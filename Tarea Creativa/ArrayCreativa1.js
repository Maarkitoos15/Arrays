const inventario = [];

// Función para agregar un producto al inventario
function agregar(producto) {
  inventario.push(producto);
  console.log(`Este es el producto agregado: ${producto}`);
}

// Función para eliminar un producto del inventario
function eliminar(producto) {
  const indice = inventario.indexOf(producto);
  if (indice !== -1) {
    inventario.splice(indice, 1);
    console.log(`El producto eliminado: ${producto}`);
  } else {
    console.log(`Lo siento, producto no encontrado: ${producto}`);
  }
}

function buscar(producto) {
  return inventario.includes(producto) 
    ? `Este es el producto encontrado: ${producto}` 
    : `Este es el producto no encontrado: ${producto}`;
}

// Pruebas
agregar("teclado");
agregar("monitor");
agregar("raton");

console.log("El inventario actual:", inventario);

eliminar("monitor");
console.log("El inventario despues de eliminar:", inventario);

console.log(buscar("raton"));
console.log(buscar("pantalla"));
