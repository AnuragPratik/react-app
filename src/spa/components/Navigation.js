import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation bg-warning">
      <Link className="link" to="users">
        Users
      </Link>
      <Link className="link" to="about">
        About
      </Link>
      <Link className="link" to="dynamic">
        Profile
      </Link>
    </div>
  );
};

export default Navigation;
