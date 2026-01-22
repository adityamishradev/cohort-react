import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ( props ) => {
    // yaha data store hota hain
  const [user, setUser] = useState("Aditya");

  return (

    /* Noted :- Data pass hota hain props ki helps se redux mein bhi 
    aur ye parent to child component mein hota hain
    
    */
   //user and setuser 
    <UserContext.Provider value={{ user, setUser }}>
        {/* ye parent to child component mein data pass hog */}
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
