import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood'
import TitlePage from './components/TitlePage';
import { useState } from 'react';
import StoreInfoLoader from './components/StoreInfoLoader';
import { BrowserRouter, Route } from 'react-router-dom';
import CartPage from './CartPage'; // Import your CartPage component

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
    <BrowserRouter>
      <div className="App">
        <TitlePage setShowPosts={setShowPosts} setIsSignUpClicked={setIsSignUpClicked} /> {/* Pass setIsSignUpClicked to TitlePage */}
        <UserData chooseUsername={chooseUsername}/>
        <UploadFoodForm username={username}/>
        {showposts && <BuyingFood username={username} showposts={showposts}/>}
        <StoreInfoLoader username={username}/>
      
        <Route path="/cart" component={CartPage} />
        {/* Other routes can go here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
