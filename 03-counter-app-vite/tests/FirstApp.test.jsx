import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';


describe('Pruebas en <FirstAppp />', () => {
  
  // test('debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, soy Edgard Barquero';
  //   const { container } = render(<FirstApp title={ title } />);

  //   //console.log(container);

  //   expect(container).toMatchSnapshot(); // La primera vez crea el snapshot


  // });

  test('debe de mostrar el título en un h1', () => {

    const title = 'Hola, soy Edgard';
    const { container, getByText, getByTestId } = render(<FirstApp title={ title } />);

    //
    expect( getByText(title) ).toBeTruthy(); // O sea que exista el h1 con el título

    //
    const h1 = container.querySelector('h1');
    expect( h1.textContent ).toBe(title);

    //
    expect( getByTestId('test-title').innerHTML ).toContain(title);


  });

  test('debe de mostrar el subtitulo enviado por props', () => { 
  
    const title = 'Hola, soy Edgard';
    const subTitle = 'Soy un desarrollador web';
    
    const { getByText } = render(
        <FirstApp 
          title={ title } 
          subTitle={ subTitle } 
        />);

    expect( getByText(subTitle).innerHTML ).toBeTruthy();        

  
  })


});
