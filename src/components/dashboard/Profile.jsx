import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
   const { user } = useContext(AuthContext);

   return (
      <div>
         <h1>this is profile</h1>
         <div>{user?.name}</div>
         <div>{user?.email}</div>
         <div>{user?.gender}</div>
         <div>{user?.role}</div>
         <div>{user?.deptartment}</div>
      </div>
   );
};

export default Profile;