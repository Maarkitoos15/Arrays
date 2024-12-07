let coloresPrimarios = ['Rojo', 'Amarillo', 'Azul'];

coloresPrimarios.splice(1, 0, 'Verde');
console.log('array actualizado por unnumevo color :', coloresPrimarios);

let ultimosdosColores = coloresPrimarios.slice(-2);
console.log('estos son los dos ultimos colores que quedan :', ultimosdosColores);
