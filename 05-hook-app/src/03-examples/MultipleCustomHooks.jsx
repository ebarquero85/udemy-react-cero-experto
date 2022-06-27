import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const url = 'https://www.breakingbadapi.com/api/quotes/1';

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
                    ? <div className="alert alert-info text-center">Loading...</div>
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1" >{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>                
                    )
            }

            <button className="btn btn-primary">
                Next quote
            </button>

        </>
    )

}
