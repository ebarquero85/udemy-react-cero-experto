import { getHeroeById } from '../src/base-pruebas/08-imp-exp.js';

describe("Pruebas en el archivo 08-imp-exp", () => {
  
  test("Debe de retornar un heroe por un ID", () => {

    const id = 2;
    const heroe = getHeroeById(id);

    //console.log(heroe);

    expect(heroe.name).toEqual('Spiderman');

  });

  test("Debe de retornar un error si el heroe no existe", () => {
    
    const id = 100;
    const heroe = getHeroeById(id);

    //expect(heroe).toBe(undefined);
    expect(heroe).toBeFalsy();

  });

});
