import SidePanel from "./sidePanel";
import { Outlet } from "react-router-dom";

const DashboardPanel = () => {
   return (
      <div className="border-18 border-indigo-300 rounded-xl">
         <div className="border-18 border-indigo-500">
            <div className="h-[600px] overflow-hidden border-18 border-indigo-700 bg-gray-50">
               <div className="flex h-full ">
                  {/* Sidebar */}
                  <div className="w-1/4 h-full overflow-y-auto">
                     <SidePanel />
                  </div>

                  {/* Main Content */}
                  <div className="w-3/4 h-full overflow-y-auto p-5 ">
                     <Outlet />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardPanel;
