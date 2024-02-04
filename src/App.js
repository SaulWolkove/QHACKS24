import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';
import UploadFoodForm from './components/uploadFoodForm';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import BuyingFood from './components/BuyingFood';
import TitlePage from './components/TitlePage';
import UserData from './components/UserData';

function App() {
  const [showposts, setShowPosts] = useState(true);
  const [username, setUsername] = useState(null);
  const setUser=(name)=>{
    setUsername(name)
  }

  return (
    <BrowserRouter>
      <Routes>
        <UserData setUser={setUser}/>

        <Route path="/" element={<TitlePage username={username}/>} />
        <Route path="/cart" element={<CartPage username={username}/>} />
        <Route
          path="/buying-food"
          element={showposts ? <BuyingFood showposts={showposts} username={username} /> : null}
        />
        <Route path="/post-food" element={<UploadFoodForm username={username}/>} />
        <Route path="/about-us" element={<AboutUs />} username={username}/>
        <Route path="/help" element={<Help />} username={username}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
