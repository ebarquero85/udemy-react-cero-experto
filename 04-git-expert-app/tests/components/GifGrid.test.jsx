import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGif } from '../../src/hooks/useFetchGif';

jest.mock('../../src/hooks/useFetchGif');


describe('Pruebas en el <GifGrid />', () => { 

    const category = 'Runing';

    test('debe de mostrar el loading inicialmente', () => {
        
        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        //screen.debug()

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imágenes de useFetchGifs', () => { 

        const gifs = [
            {id: 'ABC',title: 'Saludos',url: 'https://localhost/img1.jpg'},
            {id: 'BBB',title: 'Noticias',url: 'https://localhost/img2.jpg'},
        ]
    
        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );    

        expect( screen.getAllByRole('img').length ).toBe(2);
    
    
    })



})