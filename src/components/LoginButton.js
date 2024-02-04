import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LoginOutButtons.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="signup-button" onClick={() => loginWithRedirect()}>
      Log In / Sign Up
    </button>
  );
}

export default LoginButton;
