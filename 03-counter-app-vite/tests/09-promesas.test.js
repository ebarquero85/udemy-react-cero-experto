import { getHeroeByIdAsync } from '../src/base-pruebas/09-promesas.js';


describe('Pruebas en el archivo 09-promesas', () => {

    test('getHeroeByIdAsync Debe de retornar un heroe por un ID', (done) => {

      const id = 1;
      
      getHeroeByIdAsync( id )
        .then(heroe => {
        
          expect(heroe).toEqual({
              id: 1,
              name: 'Batman',
              owner: 'DC'
          });

          done();

        })

    
    });

    test('getHeroeByIdAsync Debe de retornar un error si el ID no existe', (done) => {

      const id = 100;
      
      getHeroeByIdAsync( id )
        .catch(heroe => { // NOTA: Importante aquí va el catch

          //console.log(heroe);

          expect(heroe).toBe(`No se pudo encontrar el héroe ${id}`);

          done();

        })

    
    });
    
});