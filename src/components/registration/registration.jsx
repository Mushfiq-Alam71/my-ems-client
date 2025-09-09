import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {

   const { createUser } = useContext(AuthContext);

   const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const name = form.name.value;
      const role = form.role.value;
      const password = form.password.value;
      console.log(email, name, role, password);

      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
         }).catch(error => console.log(error))
   }
   return (
      <div className="h-[600px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-700 font-[Poppins] border-indigo-900 border-4 rounded-xl bg-gray-50">
         <div className="bg-white max-w-sm w-full p-10 text-center shadow-lg rounded-2xl">
            <h1 className="text-3xl text-center font-bold pb-5">Registration</h1>
            <form onSubmit={handleRegister} className="space-y-4">
               <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg" />
               <div className="flex flex-row gap-2.5">
                  <input type="text" placeholder="Enter your Name" name="name"
                     className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg"
                  />
               </div>
               <div>
                  <input
                     list="role-options"
                     name="role"
                     placeholder="Role"
                     className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg"
                  />
                  <datalist id="role-options">
                     <option value="Admin" />
                     <option value="HR" />
                     <option value="Employee" />
                  </datalist>
               </div>
               <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg"
               />
               <button
                  type="submit"
                  className="w-full bg-indigo-800 text-white uppercase py-4 rounded-2xl text-sm hover:bg-blue-700 transition duration-300"
               >
                  Sign Up
               </button>
               <p className="text-gray-400 text-xs mt-4">
                  Already registered?{" "}
                  <Link to="/login" className="text-indigo-800 hover:underline">
                     Log In
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Registration;