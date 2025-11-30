import React from 'react';
import { FiHeart, FiShield, FiLock, FiDollarSign } from 'react-icons/fi'; // Using FiHeart for the main icon

const SupportBanner = () => {
    return (
        // Section with gradient background and consistent padding
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16 sm:py-20 lg:py-24 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Icon */}
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
                    <FiHeart className="w-10 h-10 text-white" />
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Support ShieldTalk
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Help us keep ShieldTalk free, secure, and accessible for everyone around the world.
                    Your contribution directly supports our mission of safe, encrypted communication.
                </p>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                        <FiShield className="w-4 h-4 text-green-600" />
                        Secure donations via Stripe
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FiLock className="w-4 h-4 text-blue-600" />
                        SSL encrypted transactions
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FiHeart className="w-4 h-4 text-red-500" />
                        No fees taken from donations
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SupportBanner;