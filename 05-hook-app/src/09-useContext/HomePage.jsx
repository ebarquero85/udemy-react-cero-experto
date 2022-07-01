import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const HomePage = () => {

    const { user } = useContext( UserContext );


    return (
        <>
            <h1>Home Page <small className="text-success"> { user.username } </small></h1>
            <hr />



        </>
    )
}
