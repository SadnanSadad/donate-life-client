import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import HelmetHook from "../../../hooks/HelmetHook";

const Contact = () => {
    return (
        <>

        <HelmetHook title="Contact Us"></HelmetHook>

            <div className="my-6 container mx-auto">

                <div className="text-center space-y-4 mb-4 ">
                    <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
                    <p className="text-muted-foreground">
                        Get in touch with us for any questions about blood donation
                    </p>
                </div>
                <div className="space-y-6 flex flex-col lg:flex-row justify-between">
                    <div className="p-6 bg-white shadow-xl w-full lg:w-5/12">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <IoMdMail className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm font-medium">Email</p>
                                    <p className="text-sm text-muted-foreground">contact@donatelife.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm font-medium">Phone</p>
                                    <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <IoLocationOutline className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-sm font-medium">Address</p>
                                    <p className="text-sm text-muted-foreground">
                                        123 Donation Street
                                        <br />
                                        City, State 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white shadow-xl w-full lg:w-5/12">
                        <div className="space-y-4">
                            <h3 className="text-2xl">For <span className="text-red-600">Donation</span></h3>
                            <p className="text-base">
                               <span className="font-semibold text-red-600">Bkash:</span>
                               <span className="font-semibold"> 01000000000</span>
                            </p>
                           
                            <p className="text-base">
                               <span className="font-semibold text-red-600">Nagad:</span>
                               <span className="font-semibold"> 01000000000</span>
                            </p>
                           
                            <p className="text-base">
                               <span className="font-semibold text-red-600">Rocket:</span>
                               <span className="font-semibold"> 01000000000</span>
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>



    );
};

export default Contact;