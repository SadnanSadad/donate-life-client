import React, { useState, useEffect } from 'react';
import HelmetHook from '../../hooks/HelmetHook';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setShake((prev) => !prev);  // Toggle shake effect every 0.5s
        }, 500);
        return () => clearInterval(timer);  // Clean up the timer on component unmount
    }, []);

    return (
        <>
            <HelmetHook title="Error" />
            
            <div className='bg-red-50 min-h-screen'>
                <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Page Not Found</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                The page you're looking for doesn't exist or has been moved.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            {/* Animated "404" Text */}
                            <div className="relative w-64 h-64 flex justify-center items-center">
                                <div
                                    className={`text-6xl font-extrabold text-red-600 transition-transform duration-300 ${
                                        shake ? 'animate-shake' : ''
                                    }`}
                                >
                                    404
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/" className="btn bg-red-600 flex justify-center text-white">
                                <button className="flex items-center" onClick={() => (window.location.href = "/")}>
                                    <AiOutlineHome className="w-4 h-4 mr-2 " />
                                    Home Page
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>

            {/* Adding the custom shake animation in CSS */}
            <style jsx>{`
                @keyframes shake {
                    0% {
                        transform: translateX(-10px);
                    }
                    25% {
                        transform: translateX(10px);
                    }
                    50% {
                        transform: translateX(-10px);
                    }
                    75% {
                        transform: translateX(10px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-shake {
                    animation: shake 0.5s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default ErrorPage;
