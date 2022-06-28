import { useFetch, useCounter } from '../hooks';
import { Loading, Quotes } from '../03-examples';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

    const { data, isLoading, hasError } = useFetch(url);
    const { author, quote } = !!data && data[0];


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
