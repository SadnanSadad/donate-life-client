import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/mainPages/AboutUs/AboutUs";
import SearchDonors from "../pages/mainPages/SearchDonors/SearchDonors";
import BloodRequest from "../pages/mainPages/BloodRequest/BloodRequest";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/shared/ErrorPage";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/DashBoard/Admin/Admin/AdminHome";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers";
import DonorList from "../pages/DashBoard/Admin/DonorList/DonorList";
import BloodReqAdmin from "../pages/DashBoard/Admin/BloodReqAdmin/BloodReqAdmin";
import UserDashboard from "../pages/DashBoard/User/UserDashboard/UserDashboard";
import MessageBox from "../pages/DashBoard/User/MessageBox/MessageBox";
import MyRequests from "../pages/DashBoard/User/MyRequests/MyRequests";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/search-donors',
                element: <SearchDonors></SearchDonors>
            },
            {
                path: '/blood-request',
                element: <BloodRequest></BloodRequest>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },



    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
            {
                path: "all-users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "donor-list",
                element: <DonorList></DonorList>
            },
            {
                path: "blood-request",
                element: <BloodReqAdmin></BloodReqAdmin>
            },




            {
                path: "user-home",
                element: <UserDashboard></UserDashboard>
            },
            {
                path: "my-requests",
                element: <MyRequests></MyRequests>
            },
            {
                path: "message-box",
                element: <MessageBox></MessageBox>
            },
        ]
    }
]);

export default router;