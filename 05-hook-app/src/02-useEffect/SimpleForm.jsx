import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'edgard',
        email: 'ebarquero85@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
      //console.log('useEffect fue llamado');
    }, []);

    useEffect( () => {
      //console.log('useEffect cambio el formState');
    }, [formState]);

    useEffect( () => {
      //console.log('email changed!');
    }, [email]);
    

    return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input 
            type="text" 
            //value={}
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input 
            type="text" 
            className="form-control mt-3"
            placeholder="usuario@mail.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />

        {
            (username === 'ebarquero') && <Message />
        }

        

    </>
    )
}
