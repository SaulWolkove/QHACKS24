import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood'
import TitlePage from './components/TitlePage';
import { useState } from 'react';
import StoreInfoLoader from './components/StoreInfoLoader';
function App() {
  const [username, setUsername] = useState("");
  function chooseUsername(name){
    setUsername(name);
  }
  return (
    <div className="App">
      <TitlePage/>
      <LoginButton/>
      <LogoutButton/>
      <UserData chooseUsername={chooseUsername}/>
      <UploadFoodForm username={username}/>
      <BuyingFood username={username}/>
      <StoreInfoLoader username={username}/>
    </div>
  );
}

export default App;
