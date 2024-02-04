import React, { useState } from 'react';
import UserData from './components/UserData';
import TitlePage from './components/TitlePage';
import StoreInfoLoader from './components/StoreInfoLoader';

function AppTitle() {
  const [username, setUsername] = useState("");
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [accountType, setAccountType] = useState("user");
  const [showPosts, setShowPosts] = useState(true); // Changed variable name to showPosts
  const [showPostsStatus, setPostsStatus] = useState(true); // New state variable for status

  function chooseUsername(name) {
    setUsername(name);
  }

  function handleShowPosts() { // Changed function name
    setShowPosts(!showPosts);
    setPostsStatus(!showPostsStatus); // Update the status
  }

  return (
    <div className="App">
      <TitlePage setShowPosts={handleShowPosts} setIsSignUpClicked={setIsSignUpClicked} username={username} setAccountType={setAccountType}/>
      <UserData chooseUsername={chooseUsername}/>
      <StoreInfoLoader username={username} showPostsStatus={showPostsStatus}/> {/* Pass the status as prop */}
    </div>
  );
}

export default AppTitle;
