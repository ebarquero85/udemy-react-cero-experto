import { getImagen } from '../src/base-pruebas/11-async-await';

describe('Pruebas en el archivo 11-async-await', () => {

  test('getImagen debe de retornar una URL de la imagen ', async () => {
    
    const url = await getImagen();

    //console.log(url);

    expect(typeof url).toBe('string');


  });
    
});