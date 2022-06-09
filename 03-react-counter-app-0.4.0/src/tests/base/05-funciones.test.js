import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //console.log(user);
        expect(user).toEqual(userTest);


    })

    test('getUserActivo debe de recibir un parámetro y retornarlo en nombre', () => {

        const userTest = {
            uid: 'ABC567',
            username: 'Edgard'
        };

        const user = getUsuarioActivo('Edgard');

        expect(userTest).toEqual(user);

    })

})
