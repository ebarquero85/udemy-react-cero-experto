const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        ciudad: 'Medellin',
        zip: '12345',
        lat: 34.20
    }
};

console.log({persona}); // Mostrar el nombre del objeto
console.log(persona); 


const persona2 = persona; // Hace una referencia al objeto persona por lo que en la
                          // siguiente línea modifica a la propiedad de la persona.

//const persona2 = { ...persona }; // Forma correcta de copiar un objeto (OPERADOR SPRED)

persona2.nombre = 'Edgard';

console.log(persona2);
console.log(persona);