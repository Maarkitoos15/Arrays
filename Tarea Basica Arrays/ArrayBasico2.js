const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numPares = numeros.filter(numero => numero % 2 === 0);
console.log('Estos son los numeros pares:', numPares);

const numDuplicados = numeros.map(numero => numero * 2);
console.log('estos son los numeros duplicados:', numDuplicados);

const sumaTotal = numeros.reduce((bd, numero) => bd + numero, 0);
console.log('la suma total del 1 al 10 es:', sumaTotal);
