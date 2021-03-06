import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Quotes } from './Quotes';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data, isLoading, hasError } = useFetch(url);
    const { author, quote } = !!data && data[0];

    //console.log({ data, isLoading, hasError });

    // if( isLoading ) {
    //     return (
    //         <h1>Cargando...</h1>
    //     )
    // }
    // Si se realiza el condicional anterior no poner hooks en la parte de abajo de este código.


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <Loading />
                    : <Quotes quote={ quote } author={ author } />
            }

            <button 
                disabled={ isLoading } 
                onClick={ () => increment(1) }
                className="btn btn-primary">
                Next quote
            </button>

        </>
    )

}
