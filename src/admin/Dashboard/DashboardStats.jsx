import React from 'react';
import { FiUsers, FiMic, FiActivity } from 'react-icons/fi'; // Icons for Users, Podcasts, Online

const DashboardStats = () => {
    // Data for the stat cards
    const statsData = [
        {
            value: '1,247',
            label: 'Active Users',
            icon: <FiUsers />,
            bgColor: 'bg-gradient-to-br from-green-100 to-green-50',
            iconBgColor: 'bg-green-500',
            textColor: 'text-green-600'
        },
        {
            value: '23',
            label: 'Live Podcasts',
            icon: <FiMic />,
            bgColor: 'bg-gradient-to-br from-purple-100 to-purple-50',
            iconBgColor: 'bg-purple-500',
            textColor: 'text-purple-600'
        },
        {
            value: '892',
            label: 'Online Now',
            icon: <FiActivity />,
            bgColor: 'bg-gradient-to-br from-blue-100 to-blue-50',
            iconBgColor: 'bg-blue-500',
            textColor: 'text-blue-600'
        },
    ];

    return (
        // Section container (optional, could be directly in AdminDashboard main content)
        // Using py-8 for spacing below the WelcomeBanner, adjust as needed
        <div className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid for the stat cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            // Card styling with gradient background and rounded corners
                            className={`p-6 rounded-2xl shadow-sm border border-gray-100 ${stat.bgColor}`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Icon container */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${stat.iconBgColor}`}>
                                    {React.cloneElement(stat.icon, { className: 'w-6 h-6 text-white' })}
                                </div>
                                {/* Text content */}
                                <div>
                                    <p className={`text-3xl font-extrabold ${stat.textColor}`}>
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;