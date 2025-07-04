import SidePanel from "./sidePanel";
import { Outlet } from 'react-router-dom';

const DashboardPanel = () => {
   return (
      <div className=" border-indigo-900 border-4 rounded-xl bg-gray-50 min-h-screen">
         <div className="flex flex-row ">
            <div className="w-1/4">
               <SidePanel></SidePanel>
            </div>
            <div className="p-5 w-full">
               <Outlet></Outlet>
            </div>
         </div>
      </div>
   );
};

export default DashboardPanel;