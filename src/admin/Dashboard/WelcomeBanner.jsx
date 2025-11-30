import React from 'react';
import { Link } from 'react-router-dom'; // Assuming buttons link somewhere
import { FiEdit3, FiFileText, FiVideo } from 'react-icons/fi'; // Icons for the buttons

const WelcomeBanner = () => {
    // Placeholder user name - In a real app, this would come from props or context
    const adminUserName = "Admin User";

    return (
        // Section with gradient background and standard vertical padding
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8 sm:py-10 lg:py-12 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Flex container to align text and buttons */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Side: Welcome Text */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Welcome back, {adminUserName}! 👋
                        </h1>
                        <p className="mt-2 text-md text-gray-600">
                            Ready to connect with people worldwide? Start a conversation today!
                        </p>
                    </div>

                    {/* Right Side: Action Buttons */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Edit Profile Button */}
                        <Link
                            to="/admin/profile" // Example route
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <FiEdit3 className="w-4 h-4" />
                            Edit Profile
                        </Link>
                        {/* Write Blog Button */}
                        <Link
                            to="/admin/blog/new" // Example route
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors shadow-sm"
                        >
                            <FiFileText className="w-4 h-4" />
                            Write Blog
                        </Link>
                        {/* Start Video Chat Button */}
                        <Link
                            to="/chat" // Example route
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium shadow-md hover:opacity-90 transition-opacity"
                        >
                            <FiVideo className="w-4 h-4" />
                            Start Video Chat
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBanner;
