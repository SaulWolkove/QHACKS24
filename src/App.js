import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood'
import TitlePage from './components/TitlePage';
import { useState } from 'react';
import StoreInfoLoader from './components/StoreInfoLoader';

function App() {
  const [username, setUsername] = useState("");
  const [isSignUpClicked, setIsSignUpClicked] = useState(false); // Define isSignUpClicked state

  function chooseUsername(name){
    setUsername(name);
  }

  function handleSignUpClick() {
    setIsSignUpClicked(true); // Function to handle sign-up click
  }

  const [showposts,setposts] = useState(true);
  function setShowPosts(){
    setposts(!showposts);
  }

  return (
    <div className="App">
      <TitlePage setShowPosts={setShowPosts} setIsSignUpClicked={setIsSignUpClicked} /> {/* Pass setIsSignUpClicked to TitlePage */}
      <UserData chooseUsername={chooseUsername}/>
      <UploadFoodForm username={username}/>
      {showposts && <BuyingFood username={username} showposts={showposts}/>}
      <StoreInfoLoader username={username}/>
    </div>
  );
}

export default App;
