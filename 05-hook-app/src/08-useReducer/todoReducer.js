
export const todoReducer = ( initialState = [], action ) => {

    // NOTA: Nunca mutar los arreglos y no usar el push
    
    switch( action.type ){
        
        case '[TODO ]Add todo':

            return [
                ...initialState,
                action.payload
            ]

            //throw new Error('Action.type = BC no esta implementada');
            //return initialState;

        default:
            return initialState;
    
    }

}