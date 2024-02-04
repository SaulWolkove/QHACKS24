import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';
import UploadFoodForm from './components/uploadFoodForm';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import BuyingFood from './components/BuyingFood';

function App() {
  const [showposts, setShowPosts] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTitle />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/buying-food"
          element={showposts ? <BuyingFood showposts={showposts} /> : null}
        />
        <Route path="/post-food" element={<UploadFoodForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
