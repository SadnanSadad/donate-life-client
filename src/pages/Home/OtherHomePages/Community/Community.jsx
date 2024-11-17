import { FaDroplet, FaRegHeart } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

const Community = () => {
    return (
        <div className="flex lg:block justify-center bg-red-50 py-12 ">
            <div className="flex flex-col lg:flex-row justify-between">

                <div className="flex flex-row lg:flex-col mb-4 lg:mb-0 card bg-red-100 shadow-lg w-96 ">
                    <figure className="px-10 lg:pt-10">
                    <FaRegHeart className="text-red-600 text-8xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Save Lives</h2>
                        <p className="font-light">Your donation can save lives.</p>
                    </div>
                </div>

                <div className="flex flex-row lg:flex-col mb-4 lg:mb-0 card bg-red-100 shadow-lg w-96">
                    <figure className="px-10 lg:pt-10">
                    <IoPeopleSharp  className="text-red-600 text-8xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Join Community</h2>
                        <p className="font-light">Be part of a caring community of donors.</p>
                    </div>
                </div>

                <div className="flex flex-row lg:flex-col mb-4 lg:mb-0 card bg-red-100 shadow-lg w-96">
                    <figure className="px-10 lg:pt-10">
                    <FaDroplet className="text-red-600 text-8xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Easy Process</h2>
                        <p className="font-light">Simple and quick donation process</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;