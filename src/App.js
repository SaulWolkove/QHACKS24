import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/UserData';
import UploadFoodForm from './components/uploadFoodForm';
import BuyingFood from './components/BuyingFood'
import TitlePage from './components/TitlePage';

function App() {
  return (
    <div className="App">
      <TitlePage/>
      <LoginButton/>
      <LogoutButton/>
      <UserData/>
      <UploadFoodForm/>
      <BuyingFood/>
      

    </div>
  );
}

export default App;
