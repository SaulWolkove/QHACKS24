import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';
import Header from './components/Header';
import UploadFoodForm from './components/uploadFoodForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTitle />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/post-food" element={<UploadFoodForm />} /> {/* Define the route for /post-food */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
