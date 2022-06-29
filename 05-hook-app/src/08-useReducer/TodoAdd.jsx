import { useState } from "react"

export const TodoAdd = ({ handleNewTodo }) => {

    //console.log('Se renderiza <TodoAdd />');

    const [descripcion, setDescripcion] = useState('');

    const agregar = (e) => {
        
        e.preventDefault();

        if(descripcion){
            handleNewTodo(descripcion);
        }

        setDescripcion('');

    }


    return (
        <>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    value={ descripcion }
                    onChange={ (e) => setDescripcion(e.target.value) }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                    onClick={ agregar }
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
