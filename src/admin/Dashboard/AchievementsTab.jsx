import React from 'react';
// Importing necessary icons
import { FiVideo, FiMessageSquare, FiShield, FiGlobe, FiHeart, FiUsers, FiAward } from 'react-icons/fi';

const AchievementsTab = () => {
    // Placeholder Data - Replace with actual data fetching later
    const achievements = [
        { title: 'First Connection', description: 'Made your first video chat', icon: <FiVideo />, color: 'purple', earned: true },
        { title: 'Global Explorer', description: 'Connected with 10 different countries', icon: <FiGlobe />, color: 'purple', earned: true },
        { title: 'Conversation Master', description: 'Spent 50+ hours chatting', icon: <FiMessageSquare />, color: 'purple', earned: true },
        { title: 'Friend Maker', description: 'Added 5 friends', icon: <FiHeart />, color: 'purple', earned: true },
        { title: 'Safety Champion', description: 'Maintain 95%+ safety score', icon: <FiShield />, color: 'purple', earned: true },
        { title: 'Polyglot', description: 'Chat in 3+ languages', icon: <FiUsers />, color: 'gray', earned: false }, // Example of not earned
    ];

    // Color definitions for earned/unearned achievements (light theme only)
    const colorClasses = {
        purple: { bg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-500', border: 'border-purple-200' },
        gray: { bg: 'bg-gray-50', text: 'text-gray-500', iconBg: 'bg-gray-400', border: 'border-gray-200' },
    };

    return (
        // Main container - dark classes removed
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            {/* Header - dark classes removed */}
            <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
            <p className="text-sm text-gray-500 mb-6">Your milestones and accomplishments</p>

            {/* Grid for achievement cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((ach, index) => (
                    // Individual achievement card - dark classes removed
                    <div
                        key={index}
                        className={`flex items-start gap-4 p-4 rounded-lg border ${ach.earned ? colorClasses.purple.bg : colorClasses.gray.bg
                            } ${ach.earned ? colorClasses.purple.border : colorClasses.gray.border
                            }`}
                    >
                        {/* Icon Container */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${ach.earned ? colorClasses.purple.iconBg : colorClasses.gray.iconBg
                            }`}>
                            {React.cloneElement(ach.icon, { className: 'w-5 h-5 text-white' })}
                        </div>
                        {/* Text Content */}
                        <div className="flex-1">
                            <h4 className={`font-semibold ${ach.earned ? 'text-gray-900' : 'text-gray-500'
                                }`}>{ach.title}</h4>
                            <p className={`text-xs ${ach.earned ? 'text-gray-600' : 'text-gray-400'
                                }`}>{ach.description}</p>
                        </div>
                        {/* Trophy Icon (if earned) */}
                        {ach.earned && (
                            <FiAward className="w-5 h-5 text-yellow-500 fill-current flex-shrink-0" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Ensure default export exists
export default AchievementsTab;

