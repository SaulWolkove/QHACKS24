import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';
import Header from './components/Header';
import UploadFoodForm from './components/uploadFoodForm';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import Help from './components/Help'; // Import the Help component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTitle />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/post-food" element={<UploadFoodForm />} /> {/* Define the route for /post-food */}
        <Route path="/about-us" element={<AboutUs />} /> {/* Add the route for About Us page */}
        <Route path="/help" element={<Help />} /> {/* Add the route for Help page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
