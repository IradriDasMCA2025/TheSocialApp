import React from 'react';
import { FiVideo, FiGlobe, FiMessageSquare, FiHeart, FiShield, FiUsers, FiAward, FiEyeOff } from 'react-icons/fi'; // Added FiEyeOff for locked

const ProfileAchievementsTab = () => {
    // Helper for rarity tag styles
    const rarityStyles = {
        common: 'bg-gray-200 text-gray-700 border-gray-300',
        rare: 'bg-blue-100 text-blue-700 border-blue-200',
        epic: 'bg-purple-100 text-purple-700 border-purple-200',
        legendary: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    };

    // Helper for icon styles
    const iconStyles = {
        gray: 'bg-gray-400 text-white',
        blue: 'bg-blue-500 text-white',
        purple: 'bg-purple-500 text-white',
        orange: 'bg-orange-500 text-white',
    };

    const achievements = [
        { title: 'First Connection', desc: 'Made your first video chat', icon: <FiVideo />, rarity: 'common', color: 'gray', earned: true },
        { title: 'Global Explorer', desc: 'Connected with 25+ countries', icon: <FiGlobe />, rarity: 'rare', color: 'blue', earned: true },
        { title: 'Conversation Master', desc: 'Spent 100+ hours chatting', icon: <FiMessageSquare />, rarity: 'epic', color: 'purple', earned: true },
        { title: 'Friend Maker', desc: 'Added 20+ friends', icon: <FiHeart />, rarity: 'rare', color: 'blue', earned: true },
        { title: 'Safety Champion', desc: 'Maintain 95%+ safety score', icon: <FiShield />, rarity: 'legendary', color: 'orange', earned: true },
        { title: 'Polyglot', desc: 'Chat in 3+ languages', icon: <FiUsers />, rarity: 'epic', color: 'purple', earned: true },
        { title: 'Community Leader', desc: 'Host 50+ voice rooms', icon: <FiAward />, rarity: 'legendary', color: 'gray', earned: false },
        { title: 'Night Owl', desc: 'Chat for 10+ consecutive hours', icon: <FiEyeOff />, rarity: 'epic', color: 'gray', earned: false },
    ];

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
            <p className="text-sm text-gray-500 mb-6">Unlock badges and show off your accomplishments</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((ach) => (
                    <div
                        key={ach.title}
                        // Apply opacity if not earned
                        className={`flex items-start gap-4 p-4 rounded-lg border border-gray-200 bg-white ${!ach.earned ? 'opacity-50' : ''}`}
                    >
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${ach.earned ? iconStyles[ach.color] : 'bg-gray-200 text-gray-500'
                            }`}>
                            {React.cloneElement(ach.icon, { className: 'w-6 h-6' })}
                        </div>
                        {/* Text and Rarity Tag */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className={`font-semibold ${ach.earned ? 'text-gray-900' : 'text-gray-500'}`}>{ach.title}</h4>
                                {ach.earned && (
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md border ${rarityStyles[ach.rarity]}`}>
                                        {ach.rarity}
                                    </span>
                                )}
                            </div>
                            <p className={`text-sm ${ach.earned ? 'text-gray-600' : 'text-gray-400'}`}>{ach.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileAchievementsTab;