import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp />', () => {

    test('debe de coincidir el snapshot ', () => {

        const { container } =  render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar Cargando... al hacer submit', () => {

        const addCategories = jest.fn();
    
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'earth' } } ); 
        fireEvent.submit( form );

        //screen.debug()

        expect( screen.getByText('Cargando...') );

    
    })


})