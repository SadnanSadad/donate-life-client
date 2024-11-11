import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BloodRequest = () => {

    const axiosInstance = useAxios();

    const [bloodType, setBloodType] = useState("");
    const [bloodQuantity, setBloodQuantity] = useState("");
    const [urgency, setUrgency] = useState("");

    const handleBloodTypeChange = (event) => {
        setBloodType(event.target.value);
    };

    const handleBloodQuantityChange = (event) => {
        setBloodQuantity(event.target.value);
    };

    const handleUrgencyChange = (event) => {
        setUrgency(event.target.value);
    };


    const handleBloodRequest = (e) => {
        e.preventDefault();

        const form = e.target;

        const patientName = form.patientName.value;
        const hospitalName = form.hospitalName.value;
        const location = form.location.value;
        const requireDate = form.requireDate.value;
        const contactNumber = form.contactNumber.value;
        const additionalInfo = form.additionalInfo.value;

        const bloodReqInfo = {
            patientName,
            hospitalName,
            location,
            requireDate,
            contactNumber,
            additionalInfo,
            bloodType,
            bloodQuantity,
            urgency,
            status: "Pending"
        }

        axiosInstance.post('/blood-req', bloodReqInfo)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("Blood Requested Successfully Submitted");
            }
        })

        form.reset();
    }



    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">Submit Blood Request</h1>

                <div className="grid grid-cols-1 gap-8">
                    {/* Request Form Card */}

                    <div className="card bg-red-50 shadow-md">
                        <div className="card-header p-4">
                            <h2 className="text-2xl font-semibold text-red-600">Request Form</h2>
                        </div>
                        <div className="card-body p-4">

                            <form className="space-y-4" onSubmit={handleBloodRequest}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                                        <input id="patientName" placeholder="Enter patient name" className="input input-bordered w-full" name="patientName" />
                                    </div>
                                    <div>
                                        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                                        <div className="form-control">
                                            <select id="bloodType" className="select select-bordered w-full" name="bloodType"
                                                value={bloodType}
                                                onChange={handleBloodTypeChange}  >
                                                <option value="">Select blood type</option>
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
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
                                    <input id="hospital" placeholder="Enter hospital name" className="input input-bordered w-full" name="hospitalName" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                        <input id="location" placeholder="Enter location" className="input input-bordered w-full" name="location" />
                                    </div>

                                    <div>
                                        <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Number of Bags</label>
                                        <div className="form-control">
                                            <select id="bloodQuantity" className="select select-bordered w-full"
                                                name="bloodQuantity"
                                                value={bloodQuantity}
                                                onChange={handleBloodQuantityChange} >
                                                <option value="">Select blood Bag Amount</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                                    <div className="form-control">
                                        <select id="urgency" className="select select-bordered w-full"
                                            name="urgency"
                                            value={urgency}
                                            onChange={handleUrgencyChange}>
                                            <option value="">Select urgency level</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="requiredDate" className="block text-sm font-medium text-gray-700 mb-1">Required Date</label>
                                    <input id="requiredDate" type="date" className="input input-bordered w-full" name="requireDate" />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                    <input id="contactNumber" type="tel" placeholder="Enter contact number" className="input input-bordered w-full" name="contactNumber" />
                                </div>
                                <div>
                                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                                    <textarea id="additionalInfo" placeholder="Enter any additional information" className="textarea textarea-bordered w-full" name="additionalInfo"></textarea>
                                </div>
                                <input className="btn btn-outline btn-success w-full" type="submit" value="Submit Request" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <ToastContainer></ToastContainer>
        </div >
    );
};

export default BloodRequest;