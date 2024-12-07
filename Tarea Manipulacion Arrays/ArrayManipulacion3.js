const numAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log('estos son los nuemros  aleatorios:', numAleatorios);

const ordenAscendente = [...numAleatorios].sort((a, b) => a - b);
console.log('orden ascendente:', ordenAscendente);

const ordenDescendente = [...ordenAscendente].reverse();
console.log('Orden orden descendente:', ordenDescendente);
