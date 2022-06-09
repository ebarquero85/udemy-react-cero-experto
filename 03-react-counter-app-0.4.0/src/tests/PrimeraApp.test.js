import '@testing-library/jest-dom';
import React from 'react'; 
import { shallow } from 'enzyme';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimerApp />', () => { 

	// test('debe de mostrar el mensaje "Hola soy Edgard"', () => { 

	// 	const saludo = 'Hola soy Edgard';

	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);

	// 	expect(getByText('Hola soy Edgard')).toBeInTheDocument();

	// })

	test('debe de mostrar <PrimeraApp /> correctamente', () => {

		const saludo = 'Hola, soy Goku';		
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();

	});

	test('debe de mostrar el subtitulo enviado por props', () => {

		const saludo = 'Hola, soy Goku';
		const subTitulo = 'Soy un subtitulo';
		
		const wrapper = shallow(
			<PrimeraApp 
				saludo={ saludo }
				subtitulo={ subTitulo }
			/>
		);

		const textoParrafo = wrapper.find('p').text();
		//console.log(textoParrafo);		

		expect( textoParrafo ).toBe(subTitulo);


	});

})



