import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

   const { signIn } = useContext(AuthContext);

   const handleSignIn = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signIn(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.log(error))
   }
   return (
      <div className="h-[600px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-700 font-[Poppins] border-indigo-900 border-4 rounded-xl bg-gray-50">
         <div className="bg-white max-w-sm w-full p-10 text-center shadow-lg rounded-2xl">
            <h1 className="text-3xl text-center font-bold pb-5">Login</h1>
            <form onSubmit={handleSignIn} className="space-y-4">
               <input
                  type="email"
                  placeholder="email"
                  className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg"
               />
               <input
                  type="password"
                  placeholder="password"
                  className="w-full p-4 bg-gray-100 rounded-2xl outline-none text-lg"
               />
               <button
                  type="submit"
                  className="w-full bg-indigo-800 text-white uppercase py-4 rounded-2xl text-sm hover:bg-blue-700 transition duration-300"
               >
                  Login
               </button>
               <p className="text-gray-400 text-xs mt-4">
                  Not registered?{" "}
                  <Link to="/registration" className="text-indigo-800 hover:underline">
                     Create an account
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;