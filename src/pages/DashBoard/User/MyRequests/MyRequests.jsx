import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";



const MyRequests = () => {

    const { user, loader } = useAuth();
    const axiosInstance = useAxios();
    const [bloodReq, setBloodReq] = useState([]);


    useEffect(() => {
        axiosInstance.get(`/blood-req/email/${user?.email}`)
            .then(res => {
                setBloodReq(res.data)
            })
            .catch(error => console.error("Error fetching user info:", error));
    }, [axiosInstance, user]);

   

    const handleReceived = (donationId)=>{
        axiosInstance.patch(`/blood-req/fulfilled/${donationId}`)
        .then(data=>{
            console.log(data);
        })
    }



    return (
        <>
            <div>
                <div className="overflow-hidden rounded-lg bg-white shadow-md mb-8">
                    <h2 className="text-lg font-medium p-6">Donation Requests</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bloodReq.map((donation) => (
                                <tr key={donation._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.patientName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.bloodType}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <span className={`p-2 text-xs text-white rounded-full X ${donation.status === "Fulfilled" ? 'bg-green-600': 'bg-red-600'}`}>
                                            {donation.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.requireDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><button onClick={()=>handleReceived(donation._id)} className="btn btn-outline btn-success btn-sm ">Received</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    );
};

export default MyRequests;