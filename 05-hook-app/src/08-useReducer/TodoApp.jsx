import { TodoAdd } from './';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Estudiar React',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() + 1000,
    //     description: 'Practicar React Native',
    //     done: false
    // },
];

const init = () => JSON.parse( localStorage.getItem('todos') || [] );

export const TodoApp = () => {

    // useTodo
    // todo, handleNewTodo, handleRemoveTodo, onToggleTodo
    // 

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || []);

    }, [todos]);


    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch( action );

    };

    const handleRemoveTodo = ( id ) => {

        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        })
        
    };

    const onToggleTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })

    }


 
    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos={ todos } 
                        handleRemoveTodo={ handleRemoveTodo }
                        onToggleTodo={ onToggleTodo }
                    />

                </div>
                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd handleNewTodo={ handleNewTodo } />

                </div>
            </div>
        </>
    )
}
