import React from 'react';
import { Link } from 'react-router-dom'; // Added import
import { FaBrain } from 'react-icons/fa';
import { FiLock, FiPlay, FiEdit3, FiVideo, FiCheck, FiUsers, FiShield, FiZap } from 'react-icons/fi';

const HeroSection = () => {
    const stats = [
        { value: '10K+', label: 'Active Users' },
        { value: '50+', label: 'Countries' },
        { value: '99.9%', label: 'Uptime' }
    ];

    return (
        <section className="relative bg-white overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-100 to-transparent rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100 to-transparent rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* ## Left Column: Content ## */}
                <div className="text-left">
                    <span className="inline-flex items-center gap-x-2 bg-blue-50 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-200">
                        <FiLock className="w-4 h-4" />
                        End-to-End Encrypted
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                        Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Safely</span>
                        <span className="block">Chat Freely</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Experience the future of social communication with ShieldTalk. Random video chats, private rooms, and AI-powered matching - all with military-grade encryption.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-start gap-4">
                        <Link to="/chat" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-x-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:opacity-90 transition-opacity"><FiPlay className="w-5 h-5" />Start Chatting Now</Link>
                        <Link to="/blog" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-x-2 px-6 py-3 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><FiEdit3 className="w-5 h-5" />Write Blog</Link>
                        <Link to="/demo" className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-x-2 px-6 py-3 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><FiVideo className="w-5 h-5" />Watch Demo</Link>
                    </div>

                    <div className="mt-10 flex justify-start items-center gap-8 sm:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ## Right Column: Image with Overlays ## */}
                <div className="relative w-full max-w-2xl mx-auto lg:max-w-none h-[450px] sm:h-[550px]">
                    <img src="https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjB2aWRlbyUyMGNoYXQlMjBwZW9wbGUlMjBjb25uZWN0aW5nfGVufDF8fHx8MTc1ODE5NzcwOHww&ixlib.rb-4.1.0&q=80&w=1080" alt="Person on a video chat on a smartphone" className="w-full h-full object-cover rounded-2xl shadow-xl" />

                    {/* Overlays */}
                    <div className="absolute top-4 left-4 lg:left-[-2rem] bg-white p-3 rounded-xl shadow-lg flex items-center gap-x-3 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <FiCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Secure Connection</p>
                            <p className="text-xs text-gray-500">End-to-end encrypted</p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-x-1.5 p-2 pr-3 text-sm font-medium text-white bg-black/40 backdrop-blur-md rounded-full"><FiUsers className="w-5 h-5" /> Live Now</span>
                        <span className="inline-flex items-center gap-x-1.5 p-2 pr-3 text-sm font-medium text-white bg-black/40 backdrop-blur-md rounded-full"><FiShield className="w-5 h-5" /> Encrypted</span>
                        <span className="inline-flex items-center gap-x-1.5 p-2 pr-3 text-sm font-medium text-white bg-black/40 backdrop-blur-md rounded-full"><FiZap className="w-5 h-5" /> AI Match</span>
                    </div>

                    <div className="absolute bottom-4 right-4 lg:right-[-2rem] bg-white p-3 rounded-xl shadow-lg flex items-center gap-x-3 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <FaBrain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Smart Matching</p>
                            <p className="text-xs text-gray-500">AI-powered connections</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;