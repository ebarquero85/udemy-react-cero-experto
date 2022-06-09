import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () =>{

    test('getSaludo debe retornar fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    })

    test('Recibir Carlos si no se envia nada', () => {

        const saludo = getSaludo();

        expect('Hola Carlos').toBe(saludo);

    })

} )