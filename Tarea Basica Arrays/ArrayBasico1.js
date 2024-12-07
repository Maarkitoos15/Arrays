
let miscomidasfav = ['Arroz', 'Pollo', 'Verduras', 'Merluza'];

miscomidasfav.unshift('Pasta', 'Ensalada');
miscomidasfav.push('Hamburguesa de Espinacas', 'Bacalao Dorado');

console.log('Con comidas añadidas:', miscomidasfav);

miscomidasfav.shift();
miscomidasfav.pop();

console.log('Con comidas eliminadas:', miscomidasfav);

let especial = 'Pollo';
let posicion = miscomidasfav.indexOf(especial);

console.log(`La posicion de "${especial}" es:`, posicion);
