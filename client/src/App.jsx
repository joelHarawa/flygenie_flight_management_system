import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import UserProfile from "./pages/UserProfile";
import StaffProfile from "./pages/StaffProfile";
import StaffRegister from "./pages/StaffRegister";
import StaffLogin from "./pages/StaffLogin";
import Purchase from "./pages/Purchase";
import AddFlight from "./pages/NewFlight";
import AddAirport from "./pages/NewAirport";
import AddAirplane from "./pages/NewAirplane";
import StaffFlight from "./pages/StaffFlight";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
const router = createBrowserRouter ([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/register",
        element: <UserRegister/>
    },
    {
        path:"/login",
        element: <UserLogin/>
    },
    {
        path:"/profile",
        element: <UserProfile/>
    },
    {
        path:"/staffprofile",
        element: <StaffProfile/>
    },
    {
        path:"/staffregister",
        element: <StaffRegister/>
    },
    {
        path:"/stafflogin",
        element: <StaffLogin/>
    },
    {
        path:"/purchase",
        element: <Purchase/>
    },
    {
        path:"/addflight",
        element: <AddFlight/>
    },
    {
        path:"addairport",
        element: <AddAirport/>
    },
    {
        path:"addairplane",
        element: <AddAirplane/>
    },
    {
        path: "/flight",
        element: <StaffFlight/>
    }
]);

const App = () => {
    return <RouterProvider router={router}/>;
}

export default App;