import { getSaludo } from '../src/base-pruebas/02-template-string.js';

describe("Pruebas en el archivo 02-template-string", () => {

  test('Debe de retornar "Hola, Edgard" ', () => {

    const nombre = 'Edgard';
    const message = getSaludo(nombre);

    expect(message).toBe('Hola, Edgard');

  });

});
