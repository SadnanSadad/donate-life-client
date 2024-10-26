import { BsCart4 } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BannerHome = () => {
    return (
        <div className="bg-gradient-to-r from-red-600 from-10% via-red-500 via-40% to-red-600 to-90% h-48 lg:h-96 ">
            <div className="text-white text-center space-y-6 lg:space-y-6 pt-8 lg:pt-24">
                <h2 className="text-2xl lg:text-4xl font-bold">Save Lives, Donate Blood</h2>
                <p className="text-sm lg:text-base">Your donation can make a difference. Join our community of life savers today.</p>

                <div className="space-x-2">
                    <Link className="btn btn-sm lg:btn-md bg-red-700 text-white hover:bg-red-800 text-sm lg:text-base"><button>Donate Now</button></Link>

                    <Link className="btn btn-sm lg:btn-md border-2 border-red-900 bg-white hover:bg-red-100 text-sm lg:text-base"><button>Find Donors</button></Link>
                </div>
            </div>
        </div>
    );
};

BannerHome.propTypes = {
    name: PropTypes.string,
}

export default BannerHome;