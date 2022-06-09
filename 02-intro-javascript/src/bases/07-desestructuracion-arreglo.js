

const personajes = ['Goku', 'Vegeta', 'Trunk'];


const [ p1 ] = personajes;

console.log( p1 );

const [ , p2 ] = personajes; // Obtener el segundo personaje

console.log( p2 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);


// Tarea

const miState = (valor) => {
    return [valor, () => { console.log('Hola Mundo función') }];
}

const [nombre, setNombre] = miState('Goku');

console.log(nombre);
setNombre();


