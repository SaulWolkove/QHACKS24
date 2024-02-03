import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/UserData';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <UserData/>
      <BuyingFood/>
    </div>
  );
}

export default App;
