import { useAuth0 } from "@auth0/auth0-react";

function UserData({ setUser }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    // Call the chooseUsername function with user.email
    setUser(user.email);
  }

  // You might want to return something here, even if it's null or an empty div
}

export default UserData;