import { NavLink } from 'react-router-dom';

export const SidePanel = () => {
   return (
      <div className="side-panel w-full bg-white rounded-xl shadow-md p-5 min-h-screen">
         <div className="flex flex-row">
            <img src="src\assets\imgs\setting 1.svg" alt="" className="w-10 h-10 rounded-full p-1" />
            <h2 className='font-bold text-2xl'>Dashboard<span className="text-xs text-gray-300">v.01</span></h2>
         </div>
         <div className=''>
            <div className="flex flex-col mt-8 gap-4.5">
               <div className='flex flex-col gap-2.5'>
                  {/* bg-[#5932EA] text-[#9197B3] */}
                  {/* Employee */}
                  <NavLink to="/employee" className='flex flex-row p-[11px] justify-between rounded-lg bg-[#5932EA]'>
                     <div className='flex flex-row gap-2'>
                        <img src="src\assets\imgs\List Menu.svg" alt="" />
                        <div className="text-base font-medium ">Employee</div>
                     </div>
                     <div className='flex items-center'>
                        <img className='' src="src\assets\imgs\chevron-right 2.svg" alt="" />
                     </div>
                  </NavLink>
                  {/* Expense */}
                  <NavLink to="/expense" className='flex flex-row p-[11px] justify-between rounded-lg bg-[#5932EA]'>
                     <div className='flex flex-row gap-2'>
                        <img src="src\assets\imgs\List Menu.svg" alt="" />
                        <div className="text-base font-medium text-[#9197B3]">Expense</div>
                     </div>
                  </NavLink>
                  {/* Setting */}
                  <NavLink to="/setting" className='flex flex-row p-[11px] justify-between rounded-lg bg-[#5932EA]'>
                     <div className='flex flex-row gap-2'>
                        <img src="src\assets\imgs\List Menu.svg" alt="" />
                        <div className="text-base font-medium text-[#9197B3]">Setting</div>
                     </div>
                  </NavLink>
               </div>
               <div>
                  <NavLink to="/profile" className="text-base font-medium text-[#9197B3]">Profile</NavLink>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SidePanel;