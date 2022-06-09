import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un número', () => {

        const arr = retornaArreglo(); //['ABC', 123]
        const [letras, numeros] = retornaArreglo();

        expect( arr ).toEqual(['ABC', 123]);
        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );

    })

})
