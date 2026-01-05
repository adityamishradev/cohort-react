import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
};

export default App;
