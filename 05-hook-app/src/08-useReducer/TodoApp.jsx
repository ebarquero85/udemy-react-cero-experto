import { useReducer, useId } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra uno',
        done: false
    },
    {
        id: new Date().getTime() + 1000,
        description: 'Recolectar la piedra dos',
        done: false
    },
];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( todo ) => {
        console.log( {todo} );
    }

 
    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <ul className="list-group">
                        {
                            todos.map( todos => (
                                // TodoItem ...
                                <li key={ useId() } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Item 1</span>
                                    <button className="btn btn-danger"> Borrar </button>
                                </li>                            
                            ))
                        }
                    </ul>           
                    {/* Fin TodoList      */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/* { id: new Date... description... } */}
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Que hay que hacer?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>
                    </form>
                    {/* Fin TodoAdd */}
                </div>
            </div>
        </>
    )
}
