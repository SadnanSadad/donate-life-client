import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const BannerHome = () => {

    const { user } = useAuth();

    return (
        <div className="relative h-48 lg:h-96 overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/blood.mp4"
                autoPlay
                loop
                muted
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6 pt-10 lg:pt-24 text-white">
                <h2 className="text-2xl lg:text-4xl font-bold animate-fade-in-up">
                    Save Lives, Donate Blood
                </h2>
                <p className="text-sm lg:text-base px-4 lg:px-0 animate-fade-in-delay">
                    Your donation can make a difference. Join our community of life savers today.
                </p>

                <div className="space-x-2">
                    {
                        user ? <Link
                            to="/dashboard/user-home"
                            className="btn btn-sm lg:btn-md bg-red-700 text-white hover:bg-red-800 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                        >
                            Donate Now
                        </Link> :
                            <Link
                                to="/login"
                                className="btn btn-sm lg:btn-md bg-red-700 text-white hover:bg-red-800 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                            >
                                Donate Now
                            </Link>
                    }

                    <Link
                        to="/search-donors"
                        className="btn btn-sm lg:btn-md border-2 border-red-900 bg-white text-red-900 hover:bg-red-100 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
                    >
                        Find Donors
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Tailwind CSS animations
const tailwindStyles = `
@keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-delay {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
    animation: fade-in-up 1s ease-out forwards;
}

.animate-fade-in-delay {
    animation: fade-in-delay 1.5s ease-out forwards;
}
`;

BannerHome.propTypes = {
    name: PropTypes.string,
};

export default BannerHome;
