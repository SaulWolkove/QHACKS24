import React, { useState } from 'react';
import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood';
import TitlePage from './components/TitlePage';
import StoreInfoLoader from './components/StoreInfoLoader';

function AppTitle() {
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
    <div className="App">
      <TitlePage setShowPosts={setShowPosts} setIsSignUpClicked={setIsSignUpClicked} />
      <UserData chooseUsername={chooseUsername}/>
      <UploadFoodForm username={username}/>
      {showposts && <BuyingFood username={username} showposts={showposts}/>}
      <StoreInfoLoader username={username}/>
    </div>
  );
}

export default AppTitle;
