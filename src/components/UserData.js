import { useAuth0 } from "@auth0/auth0-react";

function UserData(){
    const {user, isAuthenticated, isLoading} = useAuth0();
    if(isLoading){
        return <div>Loading...</div>
    }
    return(
        isAuthenticated && (
            <div>
                {user.name}
            </div>
        )
    )
}


export default UserData;