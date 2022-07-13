import { useNavigate, useLocation, Outlet } from "react-router-dom";
import HomeButton from "../components/HomeButton";

const Users = () => {
  const navigate = useNavigate();
  const location = useLocation(); //window.location.href
  console.log(`Location: ${location.pathname}`);
  const handleClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="bg-success users">
      <h3>Users Page</h3>
      {!location.pathname.includes("/users/") && (
        <button className="btn btn-primary" onClick={() => handleClick("123")}>
          View user profile of #123
        </button>
      )}
      <Outlet />
      <HomeButton />
    </div>
  );
};

export default Users;
