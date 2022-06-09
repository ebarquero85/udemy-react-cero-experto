

const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
}

const saludar2 = (nombre) => console.log(`Hola 2 ${nombre}`);
const saludar3 = () => console.log(`Hola Mundo 3`);


console.log(saludar());
console.log(saludar2());
console.log(saludar3());

// Los paréntesis significa que queremos retornar lo que hay dentro.
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser());

const HolaMundo = () => ('Hola Mundo xxxx');

console.log(HolaMundo());

