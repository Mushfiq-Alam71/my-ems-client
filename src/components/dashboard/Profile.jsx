import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
   const { user } = useContext(AuthContext);
   const [userData, setUserData] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (!user?.email) return; // wait until user is loaded

      fetch(`http://localhost:5000/users?email=${user.email}`)
         .then(res => {
            if (!res.ok) throw new Error("Failed to fetch user data");
            return res.json();
         })
         .then(data => {
            setUserData(data);
         })
         .catch(err => setError(err.message));
   }, [user]);

   if (!user) return <p>No User Profile Found!...</p>;
   if (error) return <p>Error: {error}</p>;
   if (!userData) return <p>Loading profile...</p>;

   return (
      <div>
         <h1 className="bg-blue-600 px-4 py-2 rounded-2xl text-white inline-block font-bold text-lg ">Profile</h1>
         <div><strong>Name:</strong> {userData.first_name}</div>
         <div><strong>Email:</strong> {userData.email}</div>
         <div><strong>Gender:</strong> {userData.gender}</div>
         <div><strong>Role:</strong> {userData.role}</div>
         <div><strong>Department:</strong> {userData.department}</div>
      </div>
   );
};

export default Profile;
