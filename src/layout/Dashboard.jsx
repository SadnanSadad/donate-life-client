
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaHome } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useDonor from "../hooks/useDonor";

const Dashboard = () => {

    // const isAdmin = false;
    // const isUser = true;

    const [isAdmin] = useAdmin();
    const [isDonor] = useDonor();

    const location = useLocation;

    const navigate = useNavigate();
    const { logOut } = useAuth();
    const handleLogout = () => {
        logOut();
        navigate("/");
    }

    const activeNav = ({ isActive }) => ({
        color: isActive ? '#B91C1C' : '#FFFFFF',
        fontWeight: isActive ? '600' : 'normal',
        backgroundColor: isActive ? '#FFF8E1' : 'transparent',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
    });

    return (
        <div className="flex flex-col lg:flex-row min-h-screen ">
            {/* Sidebar */}
            <div className="bg-red-600 lg:w-80 w-full lg:min-h-full p-4 lg:fixed">
                <ul className="menu">
                    <li className="mb-4">
                        <Link to={'/'} className="btn btn-sm btn-square bg-red-600 text-white hover:bg-red-800">
                            <FaHome />
                        </Link>
                    </li>

                    {/* Admin Content */}
                    {isAdmin &&
                        <>
                            <li><NavLink style={activeNav} to={'/dashboard/admin-home'}>Admin Home</NavLink></li>

                            <li><NavLink style={activeNav} to={'/dashboard/all-users'}>All Users</NavLink></li>

                            <li><NavLink style={activeNav} to={'/dashboard/donor-list'}>Donor List</NavLink></li>

                            <li><NavLink style={activeNav} to={'/dashboard/blood-request'}>Blood Request</NavLink></li>

                        </>
                    }

                    {/* User Content */}
                    {isDonor && (
                        <>
                            <li><NavLink style={activeNav} to={'/dashboard/user-home'}>User Home</NavLink></li>
                            <li><NavLink style={activeNav} to={'/dashboard/my-requests'}>My Requests</NavLink></li>
                            <li><NavLink style={activeNav} to={'/dashboard/message-box'}>Message Box</NavLink></li>
                        </>
                    )}


                    <li><button className="text-white" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-80 p-6 bg-[#F3F4F6]">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;