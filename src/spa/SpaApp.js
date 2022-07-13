import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./SpaApp.css";

const SpaApp = () => {
  return (
    <div className="App">
      <h1>SPA Project</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default SpaApp;
