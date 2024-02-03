import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'; // Import the CSS file for styling

function Header() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleLogin = () => {
        if (isAuthenticated) {
            logout();
        } else {
            loginWithRedirect();
        }
    };

    return (
        <div className="header">
            <div className="dropdown">
                {/* Dropdown menu content goes here */}
                <select>
                    <option value="select_an_Option">Select an Option</option>
                    <option value="buy_food">Buy Food</option>
                    <option value="post_food">Post Food</option>
                    <option value="about">About</option>
                    <option value="help">Help</option>
                </select>
            </div>
            <div className="search-button">
                {/* Search button goes here */}
                <button>
                    <img src="./searchIcon.jpg" alt="Search" className="search-icon" />
                </button>          
            </div>
            <div className="cart-button">
                {/* Cart button goes here */}
                <button>
                    <img src="./cartIcon.png" alt="Cart" />
                </button>
            </div>
        </div>
    );
}

export default Header;
