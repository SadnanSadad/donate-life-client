import { Link } from "react-router-dom";

const ReadyPart = () => {
    return (
        <div className="relative h-48 lg:h-96 overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/blood 2.mp4" // Replace with actual video path
                autoPlay
                loop
                muted
            ></video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white space-y-3 lg:space-y-6 pt-8 lg:pt-28">
                <h2 className="text-2xl lg:text-4xl font-bold animate-fade-in-up">
                    Ready to Save Lives?
                </h2>
                <p className="text-sm lg:text-base px-4 animate-fade-in-delay">
                    "Your blood donation is a gift of life. Be the hope someone needs. Join our community of life savers today."
                </p>

                <div className="space-x-2">

                    <Link to="/login"
                        className="relative inline-flex items-center justify-center px-4 lg:px-8 py-1 lg:py-3.5 overflow-hidden font-mono  tracking-tighter text-black bg-red-200 rounded-full group ">
                        <span
                            className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
                        <span className="relative text-text group-hover:text-white">Get Started</span>
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

export default ReadyPart;
