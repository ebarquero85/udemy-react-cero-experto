import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas para componente <CounterApp />', () => {

	let wrapper = shallow(<CounterApp />); // Para no perder el intelligence (métodos)

	// Se ejecuta antes de iniciar cada uno de los tests
	beforeEach(() => {
		
		wrapper = shallow(<CounterApp />);

	})
    
	test('Hacer match con sus valores por defecto', () => {
		
		const wrapper = shallow(<CounterApp value={10} />);

		expect(wrapper).toMatchSnapshot();

	});

	test('debe de mostrar el valor por defecto de 100', () => {

		const valor = 100;

		const wrapper = shallow(
			<CounterApp
				value={valor}
			/>
		)

		const textoH2 = wrapper.find('h2').text().trim();

		expect(textoH2).toBe('100');

		
	});

	test('debe de incrementar con el boton +1', () => {
		
		//const bt1 = wrapper.find('button').at(0);
		//console.log(bt1.html());

		const bt1 = wrapper.find('button').at(0).simulate('click');

		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('11');


	});

	test('debe de decrementar con el boton -1', () => {
		
		//const bt1 = wrapper.find('button').at(0);
		//console.log(bt1.html());

		const bt1 = wrapper.find('button').at(2).simulate('click');

		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('9');


	});

	test('debe de colocar el valor por defecto en el btn reset', () => {
		
		const wrapper = shallow(<CounterApp value={105} />);

		const bt1 = wrapper.find('button').at(0).simulate('click');
		const bt2 = wrapper.find('button').at(1).simulate('click');

		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('105');


	});


});




