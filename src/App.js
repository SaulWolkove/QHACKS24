import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTitle />} />
        <Route path="/cart" element={<CartPage />} />
        
        <Route path="/Header" element={<Header />} />
        <Route path="/upload-food-form" element={<UploadFoodForm />} /> {/* Add route for UploadFoodForm */}

        {/* Define other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
