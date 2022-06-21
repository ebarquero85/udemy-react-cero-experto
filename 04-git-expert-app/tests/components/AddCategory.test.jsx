import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'


describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 
    
        render( <AddCategory onNewCategory={ () => {} } />);
        //screen.debug()

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Dog' } } ); //Se escribe dog en el input
        //screen.debug()

        expect( input.value ).toBe('Dog');
    
    })

    test('debe de llamar onNewCategory si el imput tiene un valor', () => { 
    
        const inputValue = 'Dog';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Dog' } } );
        fireEvent.submit( form );

        expect( input.value ).toBe(''); // Se confirma que se hizo el submit

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    
    })

    test('no debe de llamar a onNewCategory si el imput está vacío', () => {

        const onNewCategory = jest.fn();
    
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();


    });

})