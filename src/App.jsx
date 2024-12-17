import React from "react";
import LoginPage from "./components/LoginPage";
import {Route ,Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <div  >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
};

export default App;
