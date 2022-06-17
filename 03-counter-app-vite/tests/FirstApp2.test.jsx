import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';


describe('Pruebas en <FirstAppp />', () => {

    const title = 'Hola, soy Edgard Barquero';
    const subTitle = 'Soy un desarrollador web';
  
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot(); 


    });

    test('debe de mostrar el mensaje "Hola, soy Edgard"', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();

    });

    test('debe de mostrar el subtitulo en un h1', () => { 
    
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
    
    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
    
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } 
            /> );

        expect( screen.getByText(subTitle).innerHTML ).toContain(subTitle);

    
    })


});
