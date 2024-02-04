import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './TitlePage.css'; // Import the CSS file for styling
import LoginButton from './LoginButton'; // Import the LoginButton component
import LogoutButton from './LogoutButton'; // Import the LogoutButton component
import CreateAccountButton  from './CreateAccountButton'; // Import the LogoutButton component
import Header from './Header';
import LogoMain from './LogoMain.png';


function TitlePage({ setShowPosts }) {
    // State to track whether sign-up button is clicked
    const [isButtonsClicked, setIsButtonsClicked] = useState(false);

    const handleSignUpClick = () => {
        setIsButtonsClicked(true);
    };

    return (
        <div className="title-container">
            <Header /> 
            <div className="title-container">
                <button>
                    <img src={LogoMain} alt="logo" className="logo img"/>
                </button>                 
                <h1 className="title">FreshSave</h1>
                <p className="catchphrase">Where Every Bite Gets a Second Chance to Make a First Impression.</p>
                <div className="description">
                    <p>FreshSave offers affordable groceries to non-profits, supporting their meal programs for communities in need. We prioritize accessibility to fresh ingredients, aiding organizations combating food insecurity. Through discounted rates, we assist non-profits in maximizing their budgets, fostering collaboration among stakeholders. Together, we combat hunger, one meal at a time. Join us in creating a world without hunger. Welcome to FreshSave, where meals start with compassion and end with hope.</p>
                </div>
                {/* Add buttons section */}
                {!isButtonsClicked && (
                    <div className="buttons-container">
                        {/* Set onClick event to handle sign-up click */}
                        <button className="signup-button" onClick={handleSignUpClick}>Sign up as a grocery store</button>
                        {/* Set onClick event to handle sign-up click */}
                        <button className="signup-button" onClick={() => { setShowPosts(); handleSignUpClick(); }}>Sign up as a non-for-profit</button>
                    </div>
                )}
                {/* Conditionally render the LoginButton component */}
                {isButtonsClicked && (
                    <div>
                        <CreateAccountButton />
                        <LoginButton />
                        <LogoutButton />
                    </div>
                )}
                <div className="green-bar">
                    <p>More Services</p>
                    <p>Partner with Us</p>
                    <p>About us</p>
                </div>
                
            </div>
        </div>
    );
}

export default TitlePage;

