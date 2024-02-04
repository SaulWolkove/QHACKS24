import React, { useState } from 'react';
import './TitlePage.css'; // Import the CSS file for styling
import Header from './Header';
import LogoMain from './LogoMain.png';


function AboutUS({ setShowPosts }) {
    // State to track whether sign-up button is clicked
    const [isButtonsClicked, setIsButtonsClicked] = useState(false);

    const handleSignUpClick = () => {
        setIsButtonsClicked(true);
    };

    return (
        <div className="title-container">
            <Header /> 
            <div className="content-container">
                <div className="logo-container">
                    <img src={LogoMain} alt="logo" className="logo img"/>
                </div>                     
                <h1 className="title">FreshSave</h1>
                <div className="team-member">
                    <p className="catchphrase">Contact us at:</p>
                    <div className="description">
                        <p> 123-456-7890.</p>
                        <p>user.here@email.com</p>
                    </div>
                </div>
    
            </div>
        </div>
    );
}

export default AboutUS;