
import { NavLink } from "react-router-dom";
const Nav = () => {
    
    return (
        <div className="flex gap-x-10 mb-10">
            <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/"
            >
                Home
            </NavLink>
               <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/products"
            >
               products
            </NavLink>
 <NavLink
                className={({ isActive }) => (isActive ? "text-red-400" : "")}
                to="/login"
            >
               login
            </NavLink>
            
              
                
        </div>
    );
};

export default Nav;