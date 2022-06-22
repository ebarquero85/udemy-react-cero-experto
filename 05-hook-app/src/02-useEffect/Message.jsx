import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      
        //console.log('Message mounted');

        const onMouseMove = ( { x, y } ) => {
            const coordenadas = { x, y };
            console.log(coordenadas);
        }

    //   window.addEventListener( 'mousemove', (event) => {
    //     console.log(event.x, event.y);
    //   });
        
        window.addEventListener( 'mousemove', onMouseMove);
    
        return () => {
            //console.log('Message unmounted');
            window.removeEventListener( 'mousemove', onMouseMove);
        }

    }, []);
    

    return (
        <>
            <br />
            <h3>Usuario ya existe</h3>
        </>
    )

}
