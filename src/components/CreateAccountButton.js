import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';


function CreateAccountButton (){
    const {loginWithRedirect} = useAuth0();

    return(
        <button onClick={( ()=> loginWithRedirect())}>Create an Account </button>
    )
}


export default CreateAccountButton ;