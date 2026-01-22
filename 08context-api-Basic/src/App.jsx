import { useContext } from "react";
import UserContext from "./context/UserContext";

const App = () => {
  // Access user and setUser from context
  // usercontext ka use karke hum data ko access kar sakte hain
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user}</h2>

      <button onClick={() => setUser("Rahul")}>
        
        Change Name
      </button>
    </div>
  );
};

export default App;
