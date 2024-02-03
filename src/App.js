import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood';
import TitlePage from './components/TitlePage';
import { useState } from 'react';
import StoreInfoLoader from './components/StoreInfoLoader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';

function App() {
  const [username, setUsername] = useState("");
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  function chooseUsername(name) {
    setUsername(name);
  }

  function handleSignUpClick() {
    setIsSignUpClicked(true);
  }

  const [showposts, setposts] = useState(true);
  function setShowPosts() {
    setposts(!showposts);
  }

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
