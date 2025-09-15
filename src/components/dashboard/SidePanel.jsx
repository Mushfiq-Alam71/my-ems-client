import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

export const SidePanel = () => {
   const { user, logOut } = useContext(AuthContext);
   const handleLogout = () => {
      logOut()
         .then(() => { })
         .catch(error => console.log(error))
   }

   return (
      <div className="w-full h-full bg-white rounded-xl shadow-md p-5">
         {/* Top section */}
         <div className="flex items-center gap-2">
            <img src="src/assets/imgs/setting 1.svg" alt="logo" className="w-10 h-10 rounded-full p-1" />
            <h2 className='font-bold text-2xl'>
               Dashboard<span className="ml-2 text-xs text-gray-400">v.01</span>
            </h2>
         </div>

         {/* Nav links */}
         <div className="flex flex-col mt-8 gap-5">
            <NavLink
               to="/employee"
               className={({ isActive }) =>
                  `flex justify-between p-3 rounded-lg ${isActive ? 'bg-[#5932EA] text-white' : 'bg-[#f0f0f0] text-[#9197B3]'}`
               }
            >
               {({ isActive }) => (
                  <>
                     <div className='flex items-center gap-2'>
                        <img src="src/assets/imgs/Vector.svg" className='size-5 text-[#0d34df] ' alt="icon" />
                        <span className="text-base font-medium ">Employee</span>
                     </div>
                     {isActive && <img src="src/assets/imgs/chevron-right 2.svg" alt="chevron" />}
                  </>
               )}
            </NavLink>

            <NavLink
               to="/expense"
               className={({ isActive }) =>
                  `flex justify-between p-3 rounded-lg ${isActive ? 'bg-[#5932EA] text-white' : 'bg-[#f0f0f0] text-[#9197B3]'}`
               }
            >
               {({ isActive }) => (
                  <>
                     <div className='flex items-center gap-2'>
                        <img src="src/assets/imgs/List Menu.svg" className='size-6' alt="icon" />
                        <span className="text-base font-medium">Expense</span>
                     </div>
                     {isActive && <img src="src/assets/imgs/chevron-right 2.svg" alt="chevron" />}
                  </>
               )}
            </NavLink>

            <NavLink
               to="/setting"
               className={({ isActive }) =>
                  `flex justify-between p-3 rounded-lg ${isActive ? 'bg-[#5932EA] text-white' : 'bg-[#f0f0f0] text-[#9197B3]'}`
               }
            >
               {({ isActive }) => (
                  <>
                     <div className='flex items-center gap-2'>
                        <img src="src/assets/imgs/key-square.svg" className='size-6' alt="icon" />
                        <span className="text-base font-medium">Setting</span>
                     </div>
                     {isActive && <img src="src/assets/imgs/chevron-right 2.svg" alt="chevron" />}
                  </>
               )}
            </NavLink>

            {/* Other links remain the same */}
            <NavLink to="/profile" className="text-base font-medium text-[#9197B3] ml-1 mt-4">
               Profile
            </NavLink>
            <div>
               {user?.email
                  ? <button onClick={handleLogout} className="text-base font-medium text-[#9197B3] ml-1 mt-4">Log out</button>
                  : <div className='flex flex-row gap-2'>
                     <NavLink to="/login" className="text-base font-medium text-[#9197B3] ml-1 mt-4">
                        Login
                     </NavLink>
                     <NavLink to="/registration" className="text-base font-medium text-[#9197B3] ml-1 mt-4">
                        Registration
                     </NavLink>
                  </div>}
            </div>

         </div>
      </div>
   );
};

export default SidePanel;