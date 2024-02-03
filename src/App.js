import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTitle />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Define other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
