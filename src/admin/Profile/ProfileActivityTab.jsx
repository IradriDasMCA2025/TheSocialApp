import React from 'react';
import { FiVideo, FiMic, FiMessageSquare, FiAward, FiStar } from 'react-icons/fi';

const ProfileActivityTab = () => {
    // Placeholder data
    const recentActivity = [
        { icon: <FiVideo className="text-blue-600" />, text: 'Video chat with Alex from UK', time: '2 hours ago', rating: 5 },
        { icon: <FiMic className="text-purple-600" />, text: 'Joined voice room: Tech Discussion', time: '1 day ago' },
        { icon: <FiMessageSquare className="text-blue-600" />, text: 'Text chat with Maria from Spain', time: '2 days ago', rating: 4.5 },
        { icon: <FiAward className="text-yellow-600" />, text: 'Unlocked: Global Explorer', time: '3 days ago' },
    ];

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-500 mb-6">Latest interactions and milestones</p>
            <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                                {activity.icon}
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">{activity.text}</p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                        {activity.rating && (
                            <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className={`w-4 h-4 ${i < Math.round(activity.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileActivityTab;