import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

// const initialState = [
//     {
//         id: new Date().getTime(),
//         description: 'Estudiar React',
//         done: false
//     },
//     {
//         id: new Date().getTime() + 1000,
//         description: 'Practicar React Native',
//         done: false
//     },
// ];

const init = () => JSON.parse( localStorage.getItem('todos') || [] );

export const useTodo = (initialState = []) => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

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

    const getPendientes = () => todos.filter( todo => todo.done === false ).length;


    return {
        todos,
        todoCount: todos.length,
        todoPending: getPendientes(),
        handleNewTodo,
        handleRemoveTodo,
        onToggleTodo,
    }
    
}
