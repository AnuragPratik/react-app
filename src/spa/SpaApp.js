import { Routes, Route } from "react-router-dom";
import Dynamic from "./Dynamic";
import About from "./pages/About";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import "./SpaApp.css";

const SpaApp = () => {
  return (
    <div className="App">
      <h1>SPA Project</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>
        <Route path="dynamic" element={<Dynamic />} />
      </Routes>
    </div>
  );
};

export default SpaApp;
