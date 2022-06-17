import { retornaArreglo } from '../src/base-pruebas/07-deses-arr.js';

describe('Pruebas en el archivo 07-deses-arr', () => {

    test('Debe de retornar un string y un número', () => {

      const [letra, numero] = retornaArreglo();

      //console.log(retorno);
      expect(typeof letra).toBe('string');
      expect(typeof numero).toBe('number');

      //expect(letra).toEqual(expect.any(String));

    
    });
    
});