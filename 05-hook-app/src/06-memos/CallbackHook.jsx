import { useCallback, useState, useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      () => {
        //console.log("setCounter( counter + 1 );");
        setCounter( (c) => c + 1 );
      }, [], );


    useEffect(() => {
      
    }, [incrementFather])
    
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            {/* Incrementa de 5 en 5 */}
            <ShowIncrement increment={ incrementFather } />

        </>
    )

}
