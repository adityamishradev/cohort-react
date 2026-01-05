import React from "react";
import { toast } from "react-toastify";

const Home = () => {

  const showSuccess = () => {
    toast.success("Login Successful!");
  };

  const showError = () => {
    toast.error("Something went wrong!");
  };

  const showWarning = () => {
    toast.warning("This is a warning!");
  };

  const showInfo = () => {
    toast.info("This is info message");
  };

  return (
    <div>
      <button onClick={showSuccess}>Success Toast</button>
      <button onClick={showError}>Error Toast</button>
      <button onClick={showWarning}>Warning Toast</button>
      <button onClick={showInfo}>Info Toast</button>
    </div>
  );
};

export default Home;

