import React from "react";
import UserContext from "./UserContext";

// children are like divs 
const UserContextProvider = ({children}) => {

    
const [user,setuser] = React.useState(null)



    return(
        // these values can be accessible any time
        <UserContextProvider value={{user,setuser}}>
        {/*children-  it can consist of dashborad or card component */}
            {children}
        </UserContextProvider>
    )
}

export default UserContextProvider