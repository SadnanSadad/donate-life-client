import { useEffect, useState } from 'react';
import { FiMenu, FiMoreHorizontal, FiTrash } from "react-icons/fi";
import HelmetHook from "../../../../hooks/HelmetHook";
import useAxios from '../../../../hooks/useAxios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../../hooks/useAuth';

const DonorList = () => {
    const axiosInstance = useAxios();
    const { loader } = useAuth();
    const [donors, setDonors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axiosInstance.get('/donorList')
            .then(data => {
                setDonors(data.data);
            })
            .catch(err => {
                console.error("Error fetching donors:", err.message);
            });
    }, [axiosInstance]);

    const handleDeleteDonor = (id) => {
        axiosInstance.delete(`/donorList/${id}`)

            .then(() => {
                toast.success("Donor Deleted Successfully");

                axiosInstance.get('/donorList')
                    .then(response => {
                        setDonors(response.data);
                    })
                    .catch(error => {
                        console.error("Error fetching updated requests:", error);
                    });
            })
            .catch(error => {
                console.error("There was an error deleting the request:", error);
            });
    }

    const changeDonorStatus = (user) => {
        const newStatus = user.status === 'Active' ? 'Inactive' : 'Active'; // Toggle between Active and Inactive
        axiosInstance.patch(`/donorList/${newStatus.toLowerCase()}/${user._id}`)
            .then((res) => {
                toast.success("User Status Updated");

                setDonors(prevDonors =>
                    prevDonors.map(d => d._id === user._id ? { ...d, status: newStatus } : d)
                );
            })
            .catch(err => {
                console.error("Error updating donor status:", err.response ? err.response.data : err.message);
            });
    };

    const filteredDonors = donors.filter(donor =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <HelmetHook title="Donor List" />
            <div className="flex-1 flex flex-col overflow-hidden">
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

                {loader ? 
                    <div className="mt-12 text-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                 :
                    <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-semibold text-gray-800">Donors</h1>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-x-auto p-8">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Blood Type</th>
                                        <th>Last Donation</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDonors.map((donor) => (
                                        <tr key={donor._id}>
                                            <td>{donor.name}</td>
                                            <td>{donor.bloodType}</td>
                                            <td>{donor.last_donation}</td>
                                            <td>
                                                <span className={`badge ${donor.status === 'Active' ? 'badge-success' : 'badge-error'}`}>
                                                    {donor.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="dropdown dropdown-left">
                                                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                                                        <FiMoreHorizontal className="h-5 w-5" />
                                                    </label>
                                                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li>
                                                            <button onClick={() => changeDonorStatus(donor)}>
                                                                Change Status
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => handleDeleteDonor(donor._id)}>
                                                                <FiTrash className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                }
                <ToastContainer autoClose={1200}></ToastContainer>
            </div>

        </>
    );
};

export default DonorList;
