import React from 'react';
import { FiCheckCircle, FiStar, FiMessageSquare, FiClock, FiGlobe, FiHeart } from 'react-icons/fi';
// Assuming HiMiniTrophy was intended, or replace if another icon is needed
import { HiMiniTrophy } from 'react-icons/hi2';

const DashboardSidebar = () => {
    // Placeholder data - replace with actual user data
    const user = {
        initials: 'AU',
        name: 'Admin User',
        email: 'admin@shieldtalk.com',
        badges: ['Shield Plus', 'Verified'],
        safetyScore: 98,
        rating: 5,
        memberSince: '2024-01-01',
    };

    const quickStats = [
        { icon: <FiMessageSquare className="text-blue-500" />, label: 'Total Chats', value: 142 },
        { icon: <FiClock className="text-green-500" />, label: 'Minutes Spent', value: '2,840' },
        { icon: <FiGlobe className="text-purple-500" />, label: 'Countries', value: 15 },
        { icon: <FiHeart className="text-red-500" />, label: 'Friends Made', value: 8 },
    ];

    return (
        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar/Initials */}
                    <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-semibold">
                        {user.initials}
                    </div>
                    {/* Name & Email */}
                    <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    {/* Badges */}
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                        {user.badges.map((badge, index) => (
                            <span key={index} className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${badge === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {badge === 'Verified' && <FiCheckCircle className="w-3 h-3" />}
                                {badge}
                            </span>
                        ))}
                    </div>
                    {/* Safety Score */}
                    <div className="w-full mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-gray-700">Safety Score</span>
                            <span className="text-xs font-semibold text-green-600">{user.safetyScore}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${user.safetyScore}%` }}></div>
                        </div>
                    </div>
                    {/* Rating */}
                    <div className="mt-3 flex items-center gap-1 justify-center">
                        <span className="text-xs font-medium text-gray-700 mr-1">Rating</span>
                        {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className={`w-4 h-4 ${i < user.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    {/* Member Since */}
                    <p className="mt-3 text-xs text-gray-400">Member since {user.memberSince}</p>
                </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-md font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <ul className="space-y-3">
                    {quickStats.map((stat) => (
                        <li key={stat.label} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-gray-600">
                                {React.cloneElement(stat.icon, { className: 'w-4 h-4' })}
                                {stat.label}
                            </span>
                            <span className="font-semibold text-gray-900">{stat.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default DashboardSidebar;

