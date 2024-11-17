import { useEffect, useState } from 'react'
import { FiTrash, FiEdit } from 'react-icons/fi'
import useAxios from '../../../../hooks/useAxios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../../hooks/useAuth';

const BloodReqAdmin = () => {

    const [requests, setRequests] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const axiosInstance = useAxios();
    const { loader } = useAuth();

    useEffect(() => {
        axiosInstance.get('/blood-req')
            .then(data => {
                setRequests(data.data)
            })


    }, [axiosInstance])



    const handleDeleteRequest = (id) => {
        axiosInstance.delete(`/blood-req/${id}`)

            .then(() => {
                toast.success("Blood Request Deleted Successfully");

                axiosInstance.get('/blood-req')
                    .then(response => {
                        setRequests(response.data);
                    })
                    .catch(error => {
                        console.error("Error fetching updated requests:", error);
                    });
            })
            .catch(error => {
                console.error("There was an error deleting the request:", error);
            });
    }

    const handleEditRequest = (id) => {
        axiosInstance.patch(`/blood-req/fulfilled/${id}`)
            .then(() => {
                toast.success("Blood Request Status Updated Successfully");

                axiosInstance.get('/blood-req')
                    .then(response => {
                        setRequests(response.data);
                    })
                    .catch(error => {
                        console.error("Error fetching updated requests:", error);
                    });
            })
            .catch(error => {
                console.error("There was an error updating the request status:", error);
            });
    }

    const filteredRequests = requests.filter(request =>
        request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.urgency.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top bar */}
                <header className="bg-white shadow-md">

                    <div className="flex items-center space-x-4 p-4">
                        <input
                            type="search"
                            placeholder="Search requests..."
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
                        <div className="mb-6">
                            <h1 className="text-3xl font-semibold text-gray-800">Blood Requests</h1>
                        </div>

                        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Blood Type</th>
                                        <th>Units</th>
                                        <th>Urgency</th>
                                        <th>Hospital</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRequests.map((request) => (
                                        <tr key={request._id}>
                                            <td>{request.patientName}</td>
                                            <td>{request.bloodType}</td>
                                            <td>{request.bloodQuantity}</td>
                                            <td>
                                                <span className={`badge ${request.urgency === 'High' ? 'badge-error' : request.urgency === 'Medium' ? 'badge-warning' : 'badge-success'}`}>
                                                    {request.urgency}
                                                </span>
                                            </td>
                                            <td>{request.hospitalName}</td>
                                            <td>
                                                <span className={`badge ${request.status === 'Pending' ? 'badge-info' : 'badge-success'}`}>
                                                    {request.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex space-x-2">
                                                    <button onClick={() => handleEditRequest(request._id)} className="btn btn-sm btn-outline">
                                                        <FiEdit />
                                                    </button>
                                                    <button onClick={() => handleDeleteRequest(request._id)} className="btn btn-sm btn-outline">
                                                        <FiTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                }
                <ToastContainer autoClose={1500}></ToastContainer>
            </div>
        </>
    );
};

export default BloodReqAdmin;