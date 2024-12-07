function generarNum(cantidad) {
    const numerUni = [];
    while (numerUni.length < cantidad) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      if (!numerUni.includes(numAle)) {
        numerUni.push(numAle);
      }
    }
    return numerUni;
  }
  
  // Generar 10 números aleatorios únicos
  const numeros = generarNum(10);
  
  console.log("numeros aleatorios unicos:", numeros);
  