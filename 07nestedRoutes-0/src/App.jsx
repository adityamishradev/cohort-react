import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Services";
import Web from "./Web";
import AppDev from "./AppDev";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Parent Route */}
        <Route path="/" element={<Services />}>
          {/* Nested Routes */}
          <Route path="web" element={<Web />} />
          <Route path="app" element={<AppDev />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
