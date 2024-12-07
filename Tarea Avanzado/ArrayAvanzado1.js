const tabla = [
    ['Emilio', 23],
    ['JUancaa', 19],
    ['Marcos', 21],
    ['Chipen', 22],
  ];
  
  console.log('Asi qued la tabla :', tabla);

  tabla[1][1] = 95;
  console.log('la tabla ya con datos cambiiados', tabla);

  const unidimensional = tabla.flat();
  console.log('asi queda la tabla unidimensional:', unidimensional);
  