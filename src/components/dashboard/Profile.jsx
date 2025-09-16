import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
   const { user } = useContext(AuthContext);

   return (
      <div>
         <h1>this is profile</h1>
         <div>{user?.email}</div>
         <div>{user?.name}</div>
         <div>{user?.role}</div>
         <div>{user?.dept}</div>
      </div>
   );
};

export default Profile;