const marcasc = ["Toyota", "Mercedes-Benz", "BMW", "Volkswagen", "Chevrolet", "Lamborghini"];
const encontrarPalabraMasLarga = (marcas) => 
  marcas.reduce((masLarga, actual) => 
    actual.length > masLarga.length ? actual : masLarga
  );

const marcaMasLarga = encontrarPalabraMasLarga(marcasc);

console.log("La marca mss larga es:", marcaMasLarga);
