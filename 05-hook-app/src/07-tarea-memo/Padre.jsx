import { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementarPadre = useCallback(
      (num) => {
        setValor( (v) => v + num );
      }, []);
    

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }


    return (
        <>
            
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementarPadre }
                    />
                ))
            }
           
        </>
    )
}
