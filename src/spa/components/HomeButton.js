import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    if (true) {
      // some condition for navigation
      navigate("/");
    }
  };
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        Goto Home
      </button>
    </div>
  );
};

export default HomeButton;
