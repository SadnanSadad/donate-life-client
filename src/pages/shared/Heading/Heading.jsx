import { Link, NavLink, useLocation } from "react-router-dom";
import image from "../../../assets/user.png"
import HelmetHook from "../../../hooks/HelmetHook";
import useAuth from "../../../hooks/useAuth";
import { BiDonateBlood } from "react-icons/bi";
import useAdmin from "../../../hooks/useAdmin";
import useDonor from "../../../hooks/useDonor";

const Heading = () => {

    // const isAdmin = false;
    // const isUser = true;

    const [isAdmin] = useAdmin();
    const [isDonor] = useDonor();

    const { loader, user, logOut } = useAuth();

    const handleLogout = () => {
        logOut();
    }

    const activeNav = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'red' : '#FEE2E2',
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? 'white' : 'black'
        }
    }

    const navLinks = <>
        <li><NavLink to="/" style={activeNav}>Home</NavLink></li>
        <li><NavLink to="about-us" style={activeNav}>About Us</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="search-donors" style={activeNav}>Search Donors</NavLink></li>
                <li><NavLink to="blood-request" style={activeNav}>Blood Request</NavLink></li>
            </>
        }
        {
            loader ?
                <div className="mt-3 text-center">
                    <span className="loading loading-spinner loading-sm"></span>
                </div> :
                <>
                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end ">
                                <li tabIndex={0} role="button" ><img src={image} className="w-14" /></li>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li className="p-2 font-semibold">{user.displayName}</li>

                                    {
                                        isAdmin &&
                                            <li><NavLink to={'/dashboard/admin-home'}>Dashboard</NavLink></li>
                                    }


                                    {
                                        isDonor &&
                                            <li><NavLink to={'/dashboard/user-home'}>Dashboard</NavLink></li>
                                    }

                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>

                            :
                            <li><NavLink to="login" style={activeNav}>Login</NavLink></li>

                    }
                </>
        }
    </>

    const location = useLocation();
    const currentPath = location.pathname;

    const pageTitles = {
        '/': 'Home',
        '/about-us': 'About Us',
        '/search-donors': 'Donor List',
        '/blood-request': 'Blood Request',
        '/login': 'Login',
        '/register': 'Register',
    };

    const pageTitle = pageTitles[currentPath] || 'Page Not Found';

    return (
        <div>
            <HelmetHook title={pageTitle}></HelmetHook>

            {/* Navbar */}
            <div className="">
                <div className="navbar bg-red-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl text-red-700"><BiDonateBlood></BiDonateBlood> DonateLife</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Heading;