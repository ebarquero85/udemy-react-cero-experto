import { useTodo } from '../hooks';
import { TodoList, TodoAdd } from './';


export const TodoApp = () => {

    const { todos, todoCount, todoPending, handleNewTodo, handleRemoveTodo, onToggleTodo } = useTodo();
 
    return (
        <>
            <h1>TodoApp: { todoCount }, <small>pendientes: { todoPending }</small></h1>
            <hr />

            <div className="row">
                
                {/* COLUMNA IZQUIERDA */}
                <div className="col-7">

                    <TodoList 
                        todos={ todos } 
                        handleRemoveTodo={ handleRemoveTodo }
                        onToggleTodo={ onToggleTodo }
                    />

                </div>

                {/* COLUMNA DERECHA */}
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd 
                        handleNewTodo={ handleNewTodo } 
                    />

                </div>
            </div>
        </>
    )

}
