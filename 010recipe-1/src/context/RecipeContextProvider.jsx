import RecipeContext from "./RecipeContext";
import { useState } from "react";

const RecipeContextProvider = (props) => {
  const [data, setdata] = useState([]);
  console.log(data);

  return (
    <RecipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
