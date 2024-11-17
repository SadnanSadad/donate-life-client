import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import HelmetHook from "../../../../hooks/HelmetHook";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const axiosInstance = useAxios();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axiosInstance.get("/users")
            .then(data => {
                setUsers(data.data);
            })
            .catch(err => {
                console.error("Error fetching users:", err);
                toast.error("Failed to load users");
            });
    }, [axiosInstance]);

    const handleDeleteUser = (id) => {
        axiosInstance.delete(`/users/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success("User Deleted");
                    setUsers(users.filter(user => user._id !== id));
                }
            })
            .catch(err => {
                console.error("Error deleting user:", err);
                toast.error("Failed to delete user");
            });
    };

    const filteredDonors = users.filter(donor =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <HelmetHook title={"All Users"} />

            <header className="bg-white shadow-md p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <input
                        type="search"
                        placeholder="Search donors..."
                        className="input input-bordered w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <div className="container mx-auto px-4 py-6">
                <div className='mb-4'>
                    <h2 className="text-3xl font-semibold">All Users</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDonors.map((user, idx) => (
                                <tr key={user._id} className="border-b hover:bg-gray-100">
                                    <td className="px-4 py-2">{idx + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className='text-red-600 hover:text-red-800'>
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default AllUsers;