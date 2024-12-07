const productos = [
    { nombre: 'manzanas', precio: 15, cantidad: 10 },
    { nombre: 'manarina', precio: 12, cantidad: 20 },
    { nombre: 'peras', precio: 8, cantidad: 30 },
    { nombre: 'cerezas', precio: 25, cantidad: 5 },
  ];
  
  console.log('estos son los siguientes produtos :', productos);

  const productoMasCaro = productos.reduce((caro, producto) => 
    producto.precio > caro.precio ? producto : caro
  );
  console.log('el producto mas cro es:', productoMasCaro);

  const productoBuscado = productos.find(producto => producto.nombre === 'manarina');
  console.log('el prodcto ms buscado es:', productoBuscado);
 
  const todosCaros = productos.every(producto => producto.precio > 10);
  console.log('¿Tienen tods los productos un precio mayor a 10?', todosCaros);
  