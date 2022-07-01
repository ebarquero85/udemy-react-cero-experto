import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <pre>
            
                {
                    JSON.stringify(user, null, 3)
                }

            </pre>

            <button
                className="btn btn-primary mt-4"
                onClick={ () => setUser({ id: 999, username: 'usuario1', emai: 'fulano@correo.com' }) }
            >
                Set New User
            </button>

        </>
    )
}
