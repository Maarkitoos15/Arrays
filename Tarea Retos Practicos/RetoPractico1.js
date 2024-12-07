const cola = [];

cola.push("Tarea 1");
cola.push("Tarea 2");
cola.push("Tarea 3");
console.log("mostramos la cola:", cola);

const primeraTarea = cola.shift();
console.log("esta es la procesada:", primeraTarea);
a
console.log("esta es la cola después de procesar una tarea:", cola);

const segundaTarea = cola.shift();
console.log("la nueva tarea procesada:", segundaTarea);

console.log("proceso final de la cola es :", cola);
