import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import AppTitle from './AppTitle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TitlePage setShowPosts={setShowPosts} setIsSignUpClicked={setIsSignUpClicked} />
        <UserData chooseUsername={chooseUsername}/>
        <UploadFoodForm username={username}/>
        {showposts && <BuyingFood username={username} showposts={showposts}/>}
        <StoreInfoLoader username={username}/>
      
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
