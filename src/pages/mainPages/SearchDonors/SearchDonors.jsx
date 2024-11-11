import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiDroplet, FiPhone } from "react-icons/fi";
import { IoSearchCircleOutline } from "react-icons/io5";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const SearchDonors = () => {
    const axiosInstance = useAxios();
    const { user, loader } = useAuth();
    const [searchResults, setSearchResults] = useState([]);
    const [bloodType, setBloodType] = useState("");
    const [location, setLocation] = useState("");
    const [selectedDonor, setSelectedDonor] = useState(null);

    useEffect(() => {
        axiosInstance.get('/donorList')
            .then(data => setSearchResults(data.data))
            .catch(err => console.error("Error fetching donors:", err.message));
    }, [axiosInstance]);

    const handleSearch = () => {
        axiosInstance.get('/donorList')
            .then(data => {
                const filteredResults = data.data.filter(donor =>
                    (!bloodType || donor.bloodType === bloodType) &&
                    (!location || donor.location.toLowerCase().includes(location.toLowerCase()))
                );
                setSearchResults(filteredResults);
            })
            .catch(err => console.error("Error fetching donors:", err.message));
    };

    const openContactModal = (donor) => {
        setSelectedDonor(donor);
        document.getElementById('contact_modal').showModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const recieverName = form.recieverName.value;
        const senderName = form.senderName.value;
        const messageSubject = form.messageSubject.value;
        const message = form.message.value;

        const messageInfo = {
            recieverName, senderName, message, messageSubject
        }

        axiosInstance.post('/user-message', messageInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success(`Message sent to ${recieverName} Successfully`);
                }
            })

        form.reset();

        document.getElementById('contact_modal').close();
    };

    return (
        <div className="min-h-screen bg-red-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Search Blood Donors</h1>

                <div className="max-w-4xl mx-auto bg-red-50 p-6 rounded-lg shadow-md mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Blood Type</span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={bloodType}
                                onChange={(e) => setBloodType(e.target.value)}
                            >
                                <option value="">Select Blood Type</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-8"
                            onClick={handleSearch}
                        >
                            <IoSearchCircleOutline className="w-4 h-4 mr-2" />
                            Search Donors
                        </button>
                    </div>
                </div>

                {loader ?
                    <div className="mt-12 text-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.map((donor, index) => (
                            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="card-body p-6">
                                    <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
                                    <div className="flex items-center mb-2">
                                        <FiDroplet className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.bloodType}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <CiLocationOn className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.location}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiPhone className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.phone}</span>
                                    </div>
                                    <button
                                        className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-4"
                                        onClick={() => openContactModal(donor)}
                                    >
                                        Contact Donor
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {/* Contact Modal */}
                <dialog id="contact_modal" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit} method="dialog">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById('contact_modal').close()}
                            >✕</button>
                            <h3 className="font-bold text-lg">Contact Donor</h3>
                            <div className="py-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">To:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={selectedDonor?.name || ""}
                                        readOnly
                                        name="recieverName"
                                    />
                                </div>

                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text">From:</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={user?.displayName || ""}
                                        className="input input-bordered w-full"
                                        readOnly
                                        name="senderName"
                                    />
                                </div>

                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text">Subject:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        name="messageSubject"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div className="form-control mt-4">
                                    <label className="label">
                                        <span className="label-text">Message:</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered w-full"
                                        placeholder="Write your message here"
                                        name="message"
                                    ></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
            <ToastContainer autoClose={1200}></ToastContainer>
        </div>
    );
};

export default SearchDonors;
