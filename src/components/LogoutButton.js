import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import './LoginOutButtons.css'; 

function LogoutButton(){
    const {logout} = useAuth0();

    return(
        <button  onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    )
}


export default LogoutButton;