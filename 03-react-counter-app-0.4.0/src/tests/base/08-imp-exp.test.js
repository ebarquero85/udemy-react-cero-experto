import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  
	test("debe de retornar un héroe por id", () => {
    
		const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => (h.id = id));

    expect(heroe).toEqual(heroeData);

  });

	test("debe de retornar undefined si el héroe no existe", () => {
    
		const id = 100;
    const heroe = getHeroeById(id);

    expect(typeof heroe).toBe('undefined');

  });

	test("debe de retornar un arreglo con los héros de DC", () => {
    
		const owner = 'DC';
    const heroes = getHeroesByOwner(owner);		

		const heroesData = heroes.filter(h => h.owner === owner);

    expect( heroes ).toEqual( heroesData );

  });

	test("debe de retornar un tamaño de 3", () => {

		const owner = 'DC';
    const heroes = getHeroesByOwner(owner);		

		//console.log(heroes);

		expect(heroes).toHaveLength(3);

	});



});
