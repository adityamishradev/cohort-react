import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>

      {/* Navigation */}
      <Link to="web">Web Development</Link>
      <br />
      <Link to="app">App Development</Link>

      <hr />

      {/* Child Component Yahan Render Hoga */}
      <Outlet />
    </div>
  );
};

export default Services;
