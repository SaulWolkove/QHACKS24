import React, { useState } from "react";
import "./TitlePage.css"; // Import the CSS file for styling
import LoginButton from "./LoginButton"; // Import the LoginButton component
import Header from "./Header";
import LogoMain from "./LogoMain.png";
import RegisterBusinessForm from "./RegisterBusinessForm";

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
                {/* Conditionally render the LoginButton component */}
                {!isButtonsClicked && (
                    <div>
                        <LoginButton />
                    </div>
                )}
                <div className="green-bar">
                    <RegisterBusinessForm />
                </div>
            </div>
        {/* Conditionally render the LoginButton component */}
        <div className="green-bar">
          <RegisterBusinessForm />
        </div>
      </div>
  );
}

export default TitlePage;

