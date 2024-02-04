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
                    <p className="catchphrase">Emese Elkind</p>
                    <div className="description">
                        <p>I am a second year Biomedical Computing student. I love to paint and read! I am a figure skater and a rock climber! This was such a fun project to do with my team!</p>
                    </div>
                </div>
                <div className="team-member">
                    <p className="catchphrase">Rena Hajjar</p>
                    <div className="description">
                        <p>I am a second year Biomedical Computing student.</p>
                    </div>
                </div>
                <div className="team-member">
                    <p className="catchphrase"> Saul Wolkove.</p>
                    <div className="description">
                        <p>I am a second year.</p>
                    </div>
                </div>
                <div className="team-member">
                    <p className="catchphrase">Ben Hilderman 😏</p>
                    <div className="description">
                        <p>I am a second year Computing student. The process of making this app was fun 😏</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUS;