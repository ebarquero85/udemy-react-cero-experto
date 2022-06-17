import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el componente <CounterApp />', () => {
    
    test('debe de hacer match con el snapshot', () => {
        
      const { container } = render( <CounterApp /> ) ;
      expect(container).toMatchSnapshot(); 

    });

    test('debe de mostrar el valor inicial de 100', () => {
      
      render( <CounterApp value={ 100 } /> ) ;
      expect(screen.getByText('100')).toBeTruthy();

    });

    test('debe de incrementar con el botón "+1"', () => {
      
      render( <CounterApp value={ 500 } /> ) ;
      fireEvent.click(screen.getByText('+1'));

      //screen.debug(); // Para ver siempre el estado del DOM

      expect(screen.getByText('501')).toBeTruthy();

    });

    test('debe de decrementar con el botón "-1"', () => {
      
      render( <CounterApp value={ 500 } /> ) ;
      fireEvent.click(screen.getByText('-1'));
      expect(screen.getByText('499')).toBeTruthy();

    });

    test('debe de resetear con el "Reset"', () => {
      
      render( <CounterApp value={ 500 } /> ) ;
      
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      
      fireEvent.click(
        screen.getByRole('button', { name: 'btn-reset' })
      );

      //screen.debug();
      
      expect(screen.getByText('0')).toBeTruthy();

    });



});