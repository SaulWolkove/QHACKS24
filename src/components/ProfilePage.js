import React, { useState } from "react";
import updateUserRequest from '../api/updateUserRequest'
import Header from './Header';  
import LogoMain from './LogoMain.png'; // Import the LogoMain.png file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ProfilePage({ username }) {
    const navigate = useNavigate(); // Define navigate function

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract form data
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");

        // Example of updating user request
        const userData = {
            username,
            name,
            email
        };

        // Call your update user request function
        updateUserRequest(userData);

        // Redirect after form submission if needed
        // navigate('/some-path'); // Example of redirecting to another page
    };

    return (
        <div className="centered-container"> 
            <img src={LogoMain} alt="LogoMain" style={{ width: '200px', height: 'auto', marginTop: '3cm' }}  />
            <form className="upload-food-form" onSubmit={handleSubmit}>
                <Header />
                <div className="upload-food-title">
                    <h2 style={{ fontFamily: 'Lato, sans-serif', marginTop: '1cm'  }}>My Profile</h2>
                </div>
                
                <label>
                    Name: John Doe
                </label>
                <label>
                    Username: John's Cookie buisness
                </label>
                <label>
                    Password: ******** 
                </label>
                <label>
                    Email: user.here@email.com
                </label>
                <label>
                    Phone number:  123-456-7890
                </label>

                <button type="submit">Edit</button>
                <button type="submit">Update Card Information</button>
                
                <button type="submit">Delete Account </button>

            </form>
        </div>
    );
}

export default ProfilePage;
