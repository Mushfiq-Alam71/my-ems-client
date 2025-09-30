import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DashboardPanel from "../components/dashboard/DashboardPanel";
import Employee from "../components/dashboard/Employee";
import Expense from "../components/dashboard/Expense";
import Profile from "../components/dashboard/Profile";
import Setting from "../components/dashboard/Setting";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const router = createBrowserRouter([
   {
      path: "/",
      element: <DashboardPanel></DashboardPanel>,
      children: [
         {
            path: '/employee',
            element: <Employee></Employee>
         },
         {
            path: '/expense',
            element: <Expense></Expense>
         },
         {
            path: '/profile',
            element: <Profile></Profile>
            // loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
         },
         {
            path: '/setting',
            element: <Setting></Setting>
         },
      ]
   },
   {
      path: "/login",
      element: <Login></Login>,
   },
   {
      path: "/registration",
      element: <Registration></Registration>,
   }
]);

export default router;