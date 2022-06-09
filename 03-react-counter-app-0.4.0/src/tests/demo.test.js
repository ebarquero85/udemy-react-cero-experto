
describe('Pruebas en el archivo demo.test.js', () =>{

    test('Deben ser iguales los strings', () => { 

        // 1. Inicialización
        const mensaje = 'Hola Mundo';
        
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observer el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })

})


