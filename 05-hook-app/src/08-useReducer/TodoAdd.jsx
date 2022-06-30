//import { useState } from "react"
import { useForm } from '../hooks'

export const TodoAdd = ({ handleNewTodo }) => {

    //console.log('Se renderiza <TodoAdd />');

    // const [description, setDescription] = useState('');

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        
        event.preventDefault();

        if(description.length === 0) return ;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTodo(newTodo);

        onResetForm();

    }


    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input 
                    type="text" 
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />

                <button type="submit" className="btn btn-outline-primary mt-2">
                    Agregar
                </button>
            </form>
        </>
    )
}
