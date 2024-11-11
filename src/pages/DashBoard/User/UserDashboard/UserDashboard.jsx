import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';

const UserDashboard = () => {
    const { user, loader } = useAuth();
    const axiosInstance = useAxios();

    const [isProfileComplete, setIsProfileComplete] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: user?.displayName || "",
        bloodType: "",
        location: "",
        phone: "",
        last_donation: ""
    });

    const [donationHistory, setDonationHistory] = useState([]);

    // Fetch user profile information and set default data for profile fields
    useEffect(() => {
        axiosInstance.get(`/donorList/${user?.displayName}`)
            .then(response => {
                const data = response.data;
                if (data && data._id) {
                    setUserInfo({
                        ...data,
                        name: user?.displayName || data.name || ""
                    });
                    setIsProfileComplete(true);
                }
            })
            .catch(error => console.error("Error fetching user info:", error));
    }, [axiosInstance, user?.displayName]);

    // Fetch donation requests filtered by the user's blood type
    useEffect(() => {
        if (userInfo.bloodType) {
            axiosInstance.get(`/blood-req/${userInfo.bloodType}`)
                .then(response => setDonationHistory(response.data))
                .catch(error => console.error("Error fetching donation history:", error));
        }
    }, [axiosInstance, userInfo.bloodType]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
            status: 'Active'
        }));
    };

    const handleProfileSubmit = () => {
        axiosInstance.post("/donorList", userInfo)
            .then(() => {
                setIsProfileComplete(true);
            })
            .catch(error => console.error("Error updating profile:", error));
    };

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Dashboard</h1>

            {!isProfileComplete ? (
                <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Complete Your Profile</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                className="w-full border-gray-300 p-2 rounded-md"
                                readOnly
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Blood Type</label>
                            <input
                                type="text"
                                name="bloodType"
                                value={userInfo.bloodType}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 p-2 rounded-md"
                                placeholder="Blood Type"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={userInfo.location}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 p-2 rounded-md"
                                placeholder="Location"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={userInfo.phone}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 p-2 rounded-md"
                                placeholder="Phone"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Last Donation Date</label>
                            <input
                                type="date"
                                name="last_donation"
                                value={userInfo.last_donation}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 p-2 rounded-md"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleProfileSubmit}
                            className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center"
                        >
                            <FaCheck className="mr-2" /> Submit
                        </button>
                    </form>
                </div>
            ) : (
                <>
                    {
                        loader ? (
                            <div className="mt-3 text-center">
                                <span className="loading loading-spinner loading-sm"></span>
                            </div>
                        ) : (
                            <>
                                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

                                    <div className="bg-white p-6 shadow-md rounded-lg">
                                        <h2 className="text-sm font-medium mb-4">Total Donation Request</h2>
                                        <div className="text-2xl font-bold">{donationHistory.filter(donation => donation.status === "Pending").length}</div>

                                        <p className="text-xs text-gray-500">Lifetime donations</p>
                                    </div>
                                    <div className="bg-white p-6 shadow-md rounded-lg">
                                        <h2 className="text-sm font-medium mb-4">Blood Type</h2>
                                        <div className="text-2xl font-bold">{userInfo.bloodType}</div>
                                        <p className="text-xs text-gray-500">Blood group</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-lg bg-white shadow-md mb-8">
                                    <h2 className="text-lg font-medium p-6">Donation Requests</h2>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {donationHistory
                                                .filter(donation => donation.status === "Pending") // Filter for only "Pending" donations
                                                .map((donation) => (
                                                    <tr key={donation._id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.bloodType}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.location}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <span className={`p-2 text-xs text-white rounded-full bg-red-600`}> {/* Red background for pending */}
                                                                {donation.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.contactNumber}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )
                    }
                </>
            )}
        </main>
    );
};

export default UserDashboard;
