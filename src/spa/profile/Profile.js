import HomeButton from "../components/HomeButton";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="bg-secondary">
      <h3>Profile of ACME</h3>
      <h4>
        ACME started in year 2000 with a vision of...
        <br />
        to serve at global level...
      </h4>
      <HomeButton />
    </div>
  );
};

export default Profile;
