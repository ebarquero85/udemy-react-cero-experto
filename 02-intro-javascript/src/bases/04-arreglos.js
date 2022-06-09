//const arreglo = new Array(100); // Arreglo con 100 posiciones vacías
const arreglo = [];

arreglo.push(1);
arreglo.push(3);
arreglo.push(4);

console.log(arreglo);

let arreglo2 = arreglo.map((numero) => {
    return numero * 2;
});

console.log(arreglo2);