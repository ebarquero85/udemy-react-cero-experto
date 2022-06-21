import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () => {

    const title = 'Dog Driving';
    const url = 'https://media4.giphy.com/media/kiBcwEXegBTACmVOnE/giphy-downsized-medium.gif?cid=b76bcd7c04ukm3m4lpf5402vfwuh1voqbg2t44molis3iyrx&rid=giphy-downsized-medium.gif'
    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect( container ).toMatchSnapshot();
        
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    
        render( <GifItem title={ title } url={ url }/> );
        //screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('Debe de mostrar el título en el componente', () => {
    
        render( <GifItem title={ title } url={ url }/> );
        expect(screen.getByText(title)).toBeTruthy();
    
    })
    
});