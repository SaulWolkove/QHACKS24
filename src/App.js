import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood'

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <UserData/>
      <UploadFoodForm/>
      <BuyingFood/>
    </div>
  );
}

export default App;
