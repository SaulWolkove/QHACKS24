import React, { useState } from "react";
import "./TitlePage.css"; // Import the CSS file for styling
import LoginButton from "./LoginButton"; // Import the LoginButton component
import Header from "./Header";
import LogoMain from "./LogoMain.png";
import RegisterBusinessForm from "./RegisterBusinessForm";
import getUserRequest from "../api/getUserRequest";
import { useQuery } from "react-query";
import addUserRequest from "../api/addUserRequest";

function TitlePage({ setShowPosts, username }) {
  // State to track whether sign-up button is clicked
  const [userUpdated, setUserUpdate] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false); // State to track whether the register form is open
  
  const { isLoading, data: user } = useQuery(
    ["user", username],
    (username) => getUserRequest(username.queryKey[1]),
    {
      onSuccess: (data) => {

        !isLoading && !userUpdated && update()
      },
    }
  );

  const update = () =>{
    addUserRequest(username)
    setUserUpdate(true)
  }



  const handleOpenRegisterForm = () => {
    setIsRegisterFormOpen(true);
  };

  const handleCloseRegisterForm = () => {
    setIsRegisterFormOpen(false);
  };

  return (
    <div className="title-container">
      {!isLoading}
      <Header />
      <div className="title-container">
        <img src={LogoMain} alt="logo" className="logo img" />

        <h1 className="title">FreshSave</h1>
        <p className="catchphrase">
          Where Every Bite Gets a Second Chance to Make a First Impression.
        </p>
        <div className="description">
          <p>
            FreshSave offers affordable groceries to non-profits, supporting
            their meal programs for communities in need. We prioritize
            accessibility to fresh ingredients, aiding organizations combating
            food insecurity. Through discounted rates, we assist non-profits in
            maximizing their budgets, fostering collaboration among
            stakeholders. Together, we combat hunger, one meal at a time. Join
            us in creating a world without hunger. Welcome to FreshSave, where
            meals start with compassion and end with hope.
          </p>
        </div>

        {/* Conditionally render the LoginButton component */}
        {!username && !isLoading && <LoginButton />}
        <div className="green-bar">
          <button onClick={handleOpenRegisterForm} className="reg-button">
            Register Business Form
          </button>
        </div>
        {/* Conditionally render the Register Business Form */}
        {isRegisterFormOpen && (
          <div className="register-form-popup">
            <div className="catchphrase">
              <span className="close" onClick={handleCloseRegisterForm}>
                &times;
              </span>
              <RegisterBusinessForm id={user[0]._id}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TitlePage;
