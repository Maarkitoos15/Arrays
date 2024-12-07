const pila = [];

pila.push("Grafica Geforce 3060");
pila.push("RAM 16GB DDR5");
pila.push("Procesador Ryzen 7 3700X");
console.log("Asi queda la pila:", pila);

const elementoEliminado = pila.pop();
console.log("el elemento eliminado es:", elementoEliminado);

console.log("se muestra ahora asi:", pila);

const otroElementoEliminado = pila.pop();
console.log("siguiente elemento eliminado:", otroElementoEliminado);

console.log("Estado final de la pila:", pila);
