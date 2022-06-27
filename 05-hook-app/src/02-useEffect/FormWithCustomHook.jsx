import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    
    //const { username, email, password } = formState;


    return (
        <>
            <h1>Form with custom Hook</h1>

            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }/>

            <input 
                type="text" 
                className="form-control mt-3"
                placeholder="usuario@mail.com"
                name="email"
                value={email}
                onChange={ onInputChange }/>

            <input 
                type="password" 
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }/>

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
            
        </>
    )
}
