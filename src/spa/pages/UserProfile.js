import { useParams } from "react-router-dom";
const UserProfile = () => {
  const { id } = useParams();
  return (
    <div className="bg-success">
      <h3>Profile of #{id}</h3>
      <p>Adam is SDE@ACME</p>
    </div>
  );
};

export default UserProfile;
