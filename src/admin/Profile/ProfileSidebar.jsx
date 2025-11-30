import React from 'react';
import { FiShield, FiMessageSquare, FiClock, FiGlobe, FiHeart } from 'react-icons/fi';

const ProfileSidebar = () => {
    // Placeholder data
    const safetyScore = 98;
    const quickStats = [
        { icon: <FiMessageSquare className="text-blue-500" />, label: 'Total Chats', value: 342 },
        { icon: <FiClock className="text-green-500" />, label: 'Hours Spent', value: 97 },
        { icon: <FiGlobe className="text-purple-500" />, label: 'Countries', value: 28 },
        { icon: <FiHeart className="text-red-500" />, label: 'Friends', value: 24 },
    ];

    return (
        <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
            {/* Safety Score Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
                <div className="flex items-center justify-center gap-2 text-md font-semibold text-gray-700">
                    <FiShield className="text-green-500" />
                    Safety Score
                </div>
                <div className="my-3">
                    <p className="text-5xl font-extrabold text-green-600">{safetyScore}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${safetyScore}%` }}></div>
                </div>
                <p className="text-sm text-gray-500">Excellent safety record. Keep up the great work!</p>
            </div>

            {/* Statistics Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-md font-semibold text-gray-900 mb-4">Statistics</h3>
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

export default ProfileSidebar;