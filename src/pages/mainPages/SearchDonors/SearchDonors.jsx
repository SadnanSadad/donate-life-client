import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiDroplet, FiPhone } from "react-icons/fi";
import { IoSearchCircleOutline } from "react-icons/io5";

const SearchDonors = () => {

    const [searchResults, setSearchResults] = useState([
        { name: "John Doe", bloodType: "A+", location: "New York", phone: "+1 234-567-8901" },
        { name: "Jane Smith", bloodType: "O-", location: "Los Angeles", phone: "+1 987-654-3210" },
        { name: "Mike Johnson", bloodType: "B+", location: "Chicago", phone: "+1 555-123-4567" },
        { name: "Jane Smith", bloodType: "O-", location: "Los Angeles", phone: "+1 987-654-3210" },
        { name: "Mike Johnson", bloodType: "B+", location: "Chicago", phone: "+1 555-123-4567" },
        { name: "Jane Smith", bloodType: "O-", location: "Los Angeles", phone: "+1 987-654-3210" },
        { name: "Mike Johnson", bloodType: "B+", location: "Chicago", phone: "+1 555-123-4567" },
        { name: "Jane Smith", bloodType: "O-", location: "Los Angeles", phone: "+1 987-654-3210" },
        { name: "Mike Johnson", bloodType: "B+", location: "Chicago", phone: "+1 555-123-4567" },
    ])

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Search Blood Donors</h1>

                <div className="max-w-4xl mx-auto bg-red-50 p-6 rounded-lg shadow-md mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

                        {/* Blood Type Select Dropdown */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Blood Type</span>
                            </label>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select Blood Type</option>
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

                        {/* Location Input */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered w-full" />
                        </div>

                        {/* Search Button */}
                        <button className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-8">
                            <IoSearchCircleOutline className="w-4 h-4 mr-2" />
                            Search Donors
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        searchResults.map((donor, index) => (
                            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="card-body p-6">
                                    {/* Donor Name */}
                                    <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>

                                    {/* Blood Type */}
                                    <div className="flex items-center mb-2">
                                        <FiDroplet className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.bloodType}</span>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center mb-2">
                                        <CiLocationOn className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.location}</span>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="flex items-center">
                                        <FiPhone className="w-5 h-5 text-red-600 mr-2" />
                                        <span>{donor.phone}</span>
                                    </div>

                                    {/* Contact Button */}
                                    <button className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-4">
                                        Contact Donor
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default SearchDonors;