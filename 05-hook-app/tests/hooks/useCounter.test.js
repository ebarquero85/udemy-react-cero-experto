import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        //console.log(result);
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 12 );
        expect( reset ).toEqual( expect.any(Function) );
        expect( increment ).toEqual( expect.any(Function) );
        expect( decrement ).toEqual( expect.any(Function) );

    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
        
    });

    test('debe de incrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(10) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        // NOTA: No llamar directamente a la variable counter
        // porque tiene el valor inicial de 10
        expect( result.current.counter ).toBe(13);


    });

    test('debe de decrementar el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement(10);
        });

        expect( result.current.counter ).toBe(90);

    });

    test('debe de resetear el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { reset, increment } = result.current;

        act( () => {
            increment(500);
            reset();
        });

        expect( result.current.counter ).toBe(0);

    });


    
});