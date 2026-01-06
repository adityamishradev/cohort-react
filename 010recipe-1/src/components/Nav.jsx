import { NavLink } from "react-router";
const Nav = () => {
  return (
    <div>
       <h1 className="text-2xl font-bold text-white pt-1">
    RecipeApp
  </h1>
    <div className="flex  gap-4 p-0 border-b-2 mb-4 flex-wrap justify-center bg-gray-900 text-white">
    
<NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "text-orange-500" : "text-white"
  }
>
  Home
</NavLink>
<NavLink
  to="/About"
  className={({ isActive }) =>
    isActive ? "text-orange-500" : "text-white"
  }
>
  About
</NavLink>
<NavLink
  to="/create"
  className={({ isActive }) =>
    isActive ? "text-orange-500" : "text-white"
  }
>
  Create
</NavLink>
<NavLink
  to="/recipes"
  className={({ isActive }) =>
    isActive ? "text-orange-500" : "text-white"
  }
>
  Recipes
</NavLink>

    </div>
    </div>
  )
}

export default Nav