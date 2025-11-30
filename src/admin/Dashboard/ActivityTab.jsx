import React from 'react';
import { FiVideo, FiClock, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'; // Icons remain the same

const ActivityTab = () => {
    // Placeholder data - replace with actual data fetching later
    const activityStats = [
        { label: 'Video Chats', value: '89', period: 'This month', bgColor: 'bg-blue-50', textColor: 'text-blue-600', borderColor: 'border-blue-100' },
        { label: 'Average Session', value: '18m', period: 'Duration', bgColor: 'bg-purple-50', textColor: 'text-purple-600', borderColor: 'border-purple-100' },
        { label: 'Text Messages', value: '1,247', period: 'This month', bgColor: 'bg-green-50', textColor: 'text-green-600', borderColor: 'border-green-100' },
        { label: 'Streak', value: '12', period: 'Days active', bgColor: 'bg-orange-50', textColor: 'text-orange-600', borderColor: 'border-orange-100' },
    ];

    return (
        // Main container for the tab content - dark mode classes removed
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            {/* Header - dark mode classes removed */}
            <h3 className="text-xl font-semibold text-gray-900">Detailed Activity</h3>
            <p className="text-sm text-gray-500 mb-6">Complete breakdown of your ShieldTalk usage</p>

            {/* Grid for activity stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activityStats.map(stat => (
                    // Individual stat card - dark mode classes removed
                    <div key={stat.label} className={`p-5 rounded-xl border ${stat.bgColor} ${stat.borderColor}`}>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className={`text-3xl font-bold ${stat.textColor} mt-1`}>{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.period}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Ensure default export exists
export default ActivityTab;

