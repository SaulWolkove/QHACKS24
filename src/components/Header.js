import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'; // Import Link for routing
import './Header.css'; // Import the CSS file for styling
import logo from './searchIcon2.jpg';
import logo2 from './cartIcon2.png.jpg';

function Header() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleLogin = () => {
        if (isAuthenticated) {
            logout();
        } else {
            loginWithRedirect();
        }
    };
    const handleCartClick = () => {
        window.open('/cart', '_blank'); // Open the cart page in a new tab
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
            <div className="search-container">
                <img src={logo} alt="Search" className="search-icon" />
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="cart-button">
                {/* Cart button goes here */}
                <button>
                    Cart
                    <img src={logo2} alt="Cart" className="cart-icon" />
                </button>
            </div>
            <Link to="/cart">Cart</Link>
        </div>
    );
}

export default Header;
