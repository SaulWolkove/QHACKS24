import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useHistory for routing
import './Header.css'; // Import the CSS file for styling
import LogoMain from './LogoMain.png';
import logo2 from './cartIcon2.png.jpg';
import LogoutButton from "./LogoutButton"

function Header() {
    const navigate = useNavigate();    
    
    const handleTitlePageClick  = () => {
        navigate('/'); // Redirect to the help page
    };
    const handleCartClick = () => {
        navigate('/cart'); // Redirect to the cart page
    };

    const handlePostFoodClick = () => {
        navigate('/post-food'); // Redirect to the upload food form page
    };

    const handleAboutUsClick = () => {
        navigate('/about-us'); // Change '/about-us' to the actual route for About Us page
    };
    const handleHelpClick  = () => {
        navigate('/help'); // Redirect to the help page
    };
    const handleBuyFoodClick  = () => {
        navigate('/buying-food'); // Redirect to the help page
    };
    return (
        <div className="header">
            <div className="dropdown">
                {/* Dropdown menu content goes here */}
                <select onChange={(e) => {
                    const selectedOption = e.target.value;
                    if (selectedOption === 'post_food') {
                        handlePostFoodClick();
                    } else if (selectedOption === 'about') {
                        handleAboutUsClick();
                    } else if (selectedOption === 'help') {
                        handleHelpClick();
                    } else if (selectedOption === 'buy_food') {
                        handleBuyFoodClick();
                    } else if (selectedOption === 'home') {
                        handleTitlePageClick();
                    }
                }}>
                    <option value="select_an_Option">Select an Option</option>
                    <option value="home">Home</option>
                    <option value="buy_food">Buy Food</option>
                    <option value="post_food">Post Food</option>
                    <option value="about">About</option>
                    <option value="help">Help</option>
                </select>
            </div>
            <div className="fresh-save">
                FreshSave
            </div>
            <div className="cart-button button">
                {/* Cart button goes here */}
                <button onClick={handleCartClick}>
                    <Link to="/cart">Cart</Link>
                    <img src={logo2} alt="Cart" className="cart-icon" />
                </button>
            </div>
            <LogoutButton/>
        </div>
    );
}

export default Header;
