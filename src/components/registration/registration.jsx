import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {

   const { createUser } = useContext(AuthContext);

   const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const first_name = form.first_name.value;
      const last_name = form.last_name.value;
      const gender = form.gender.value;
      const phone = form.phone.value;
      const role = form.role.value;
      const department = form.department.value;
      const password = form.password.value;
      console.log(email, first_name, last_name, gender, phone, role, department);

      const user = { first_name, last_name, gender, email, phone, role, department };

      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'Content-type': "application/json"
         },
         body: JSON.stringify(user)
      })

      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.log(error))
   }
   return (
      <div className="h-[600px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-700 font-[Poppins] border-indigo-900 border-4 rounded-xl bg-gray-50">
         <div className="bg-white max-w-sm w-full p-10 text-center shadow-lg rounded-2xl">
            <h1 className="text-3xl text-center font-bold pb-5">Registration</h1>
            <form onSubmit={handleRegister} className="space-y-4">

               {/* email */}
               <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg" />

               {/* name */}
               <div className="flex flex-row gap-2.5">
                  <input type="text" placeholder="First Name" name="first_name"
                     className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
                  />
                  <input type="text" placeholder="Last Name" name="last_name"
                     className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
                  />
               </div>
               {/* gender */}
               <input
                  list="gender-options"
                  placeholder="Select your Gender"
                  name="gender"
                  className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
               />
               <datalist id="gender-options">
                  <option value="Male"></option>
                  <option value="Female"></option>
               </datalist>
               {/* phone number */}
               <input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg" />

               <div className="flex flex-row gap-2.5">
                  {/* role */}
                  <div>
                     <input
                        list="role-options"
                        name="role"
                        placeholder="Role"
                        className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
                     />
                     <datalist id="role-options">
                        <option value="Admin" />
                        <option value="HR" />
                        <option value="Employee" />
                     </datalist>
                  </div>

                  {/* department */}
                  <div>
                     <input
                        list="department-options"
                        name="department"
                        placeholder="Department"
                        className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
                     />
                     <datalist id="department-options">
                        <option value="Operations" />
                        <option value="IT" />
                        <option value="Design" />
                        <option value="Business Development" />
                        <option value="Management" />
                        <option value="Marketing" />
                        <option value="Sales" />
                        <option value="Account Management" />
                        <option value="Finance" />
                        <option value="Human Resources" />
                        <option value="Quality Assurance" />
                        <option value="DevOps" />
                        <option value="Data Analyst" />
                        <option value="Networking" />
                        <option value="Customer Support" />
                     </datalist>
                  </div>
               </div>

               {/* password */}
               <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full py-2 px-4 bg-gray-100 rounded-2xl outline-none text-lg"
               />
               {/* submit button */}
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