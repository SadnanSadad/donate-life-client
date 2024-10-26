import { Link } from "react-router-dom";

const ReadyPart = () => {
    return (
        <div className="bg-gradient-to-r from-red-600 from-10% via-red-500 via-40% to-red-600 to-90% h-48 lg:h-96 ">
        <div className="text-white text-center space-y-3 lg:space-y-6 pt-8 lg:pt-28">
            <h2 className="text-2xl lg:text-4xl font-bold">Ready to Save Lives?</h2>
            <p className="text-sm lg:text-base">"Your blood donation is a gift of life. Be the hope someone needs. Join our community of life savers today."</p>

            <div className="space-x-2">
                <Link to="/register" className="btn btn-sm lg:btn-md bg-red-700 text-white hover:bg-red-800 font-bold"><button>Get Started</button></Link>
            </div>
        </div>
    </div>
    );
};

export default ReadyPart;