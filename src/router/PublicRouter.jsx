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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
]);

export default router;