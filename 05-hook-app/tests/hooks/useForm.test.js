import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el useForm()', () => {

    const initialForm = {
        name: 'Edgard',
        email: 'edgard@mail.com'
    };


    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        //console.log(result.current);

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,            
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
        
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook( () => useForm({ name: '' }) );
        //console.log(result);
        const { onInputChange } = result.current;

        act(()=> {
            onInputChange({ target: {name: 'name', value: newValue }});
        });

        expect( result.current.name ).toBe( newValue );

    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Edgard Uriel';

        const { result } = renderHook( () => useForm({ name: '' }) );
        const { onInputChange, onResetForm } = result.current;

        act(()=> {
            onInputChange({ target: {name: 'name', value: newValue }});
            onResetForm();
        });


        expect( result.current.name ).toBe( '' );

    });

    
});