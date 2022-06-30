
export const todoReducer = ( initialState = [], action ) => {

    // NOTA: Nunca mutar los arreglos y no usar el push
    
    switch( action.type ){
        
        case '[TODO] Add todo':
            return [...initialState, action.payload]
            //throw new Error('Action.type = BC no esta implementada');

        case '[TODO] Remove todo':
            return initialState.filter( todo => todo.id !== action.payload )

        case '[TODO] Toggle todo':

            return initialState.map( todo => {
                if(todo.id === action.payload){ // payload = id
                    return {
                        ...todo,
                        done: !todo.done
                    }

                }
                return todo;
            })

        default:
            return initialState;
    
    }

}