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
                    <p>FreshSave is a platform dedicated to providing affordable grocery items to non-profit organizations. Our mission is to empower non-profits with cost-effective solutions, enabling them to create nutritious meals for individuals and families in need.</p>
                    <p>At FreshSave, we understand the importance of accessibility to fresh and wholesome ingredients, especially for organizations dedicated to serving communities facing food insecurity. Through our platform, non-profits gain access to a wide range of grocery items at discounted rates, making it easier for them to procure essential ingredients for their meal programs and initiatives.</p>
                    <p>We believe that every individual deserves access to nourishing food, and we are committed to supporting non-profits in their efforts to alleviate hunger and food insecurity. By offering affordable grocery items, FreshSave enables non-profit organizations to stretch their budgets further, maximizing their impact and reach within their communities.</p>
                    <p>Our platform fosters collaboration and partnership between non-profits, suppliers, and donors, creating a network of support dedicated to addressing food insecurity at its core. Together, we can make a meaningful difference in the lives of those facing hunger and food insecurity, one meal at a time.</p>
                    <p>Join us in our mission to create a world where no one goes hungry, where every bite has the power to nourish, uplift, and inspire hope. Together, let's make a positive impact and build a brighter future for individuals and families in need. Welcome to FreshSave, where every meal begins with compassion and ends with hope.</p>
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
            </div>
        </div>
    );
}

export default TitlePage;
