import React from 'react';
import { FiVideo, FiMic, FiMessageCircle, FiGift, FiStar, FiFlag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OverviewTab = () => {
    // Placeholder data - replace with actual data fetching later
    const quickActions = [
        { title: 'Video Chat', description: 'Start face-to-face conversation', icon: <FiVideo className="text-blue-500" />, bgColor: 'bg-blue-50', link: '/video-chat' },
        { title: 'Voice Rooms', description: 'Join voice conversations & shows', icon: <FiMic className="text-purple-500" />, bgColor: 'bg-purple-50', link: '/voice-rooms' },
        { title: 'Text Chat', description: 'Connect through messages', icon: <FiMessageCircle className="text-green-500" />, bgColor: 'bg-green-50', link: '/chat' },
        { title: 'Support Us', description: 'Help keep ShieldTalk running', icon: <FiGift className="text-orange-500" />, bgColor: 'bg-orange-50', link: '/support' },
    ];

    const recentChats = [
        { initials: 'A', name: 'Alex', location: 'UK', time: '2 hours ago', rating: 5, flag: true },
        { initials: 'M', name: 'Maria', location: 'Spain', time: '1 day ago', rating: 4, flag: true },
        { initials: 'Y', name: 'Yuki', location: 'Japan', time: '2 days ago', rating: 5, flag: true },
        { initials: 'A', name: 'Ahmed', location: 'Egypt', time: '3 days ago', rating: 3, flag: true },
    ];

    return (
        // Container for the tab content with spacing between sections
        <div className="space-y-8">

            {/* Quick Actions Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">⚡ Quick Actions</h3>
                <p className="text-sm text-gray-500 mb-4">Jump into conversations quickly</p>
                {/* Grid layout for Quick Action cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickActions.map(action => (
                        <Link
                            key={action.title}
                            to={action.link}
                            // Styling for each Quick Action card
                            className={`p-6 rounded-xl border border-gray-200 flex items-start gap-4 transition hover:shadow-md ${action.bgColor}`}
                        >
                            <div className="text-2xl mt-1 flex-shrink-0">
                                {action.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{action.title}</h4>
                                <p className="text-sm text-gray-600">{action.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Chats Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Recent Chats</h3>
                <p className="text-sm text-gray-500 mb-4">Your latest conversations</p>
                {/* List container for recent chat items */}
                <div className="space-y-3">
                    {recentChats.map((chat, index) => (
                        // Styling for each Recent Chat item
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                            {/* Left side: Avatar and User Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold flex-shrink-0">
                                    {chat.initials}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{chat.name}</p>
                                    <p className="text-xs text-gray-500">{chat.location}</p>
                                </div>
                            </div>
                            {/* Middle: Rating and Time */}
                            <div className="text-right mx-2 flex-shrink-0">
                                <div className="flex items-center gap-1 justify-end">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className={`w-3 h-3 ${i < chat.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{chat.time}</p>
                            </div>
                            {/* Right side: Flag icon */}
                            <FiFlag className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Ensure the component is exported correctly
export default OverviewTab;

