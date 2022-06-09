
// Desestructuración
// Asignación Desustructurada

const persona = {
    nombre: 'Juan',
    edad: 28,
    clave: 'Abc123',
}

const { nombre, edad } = persona;

console.log(nombre)

const { nombre:nombre2 } = persona; // Para guardarlo en otra variable

console.log(nombre2);

const retornaPersona = ({ nombre, edad, rango = 'Capitan'}) => {
    //console.log(usuario);
    console.log(nombre, edad, rango);

}

retornaPersona(persona);

////////////

const miContext = ({ clave, edad }) => {    
    return {
        nombreClave: clave,
        anios: edad,
        latitudlongitud: {
            lat: 14.2135,
            lng: -12.1234
        }
    }
}

const {nombreClave, anios, latitudlongitud} = miContext(persona);
const {lat, lng} = latitudlongitud;

console.log(nombreClave, anios, lat, lng);
