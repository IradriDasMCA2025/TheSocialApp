import React from 'react';
import {
    FiShield, FiZap, FiUsers, FiLock, FiStar, FiGift, FiHeart, FiDatabase, FiTarget, FiUserCheck, FiDollarSign
} from 'react-icons/fi';

// Helper component for Supporter Badges
const SupporterBadge = ({ tier }) => {
    const styles = {
        Gold: { icon: <FiStar />, text: 'Gold', classes: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        Silver: { icon: <FiStar />, text: 'Silver', classes: 'bg-gray-200 text-gray-700 border-gray-300' },
        Bronze: { icon: <FiGift />, text: 'Bronze', classes: 'bg-orange-200 text-orange-700 border-orange-300' },
        Supporter: { icon: <FiHeart />, text: 'Supporter', classes: 'bg-pink-100 text-pink-700 border-pink-200' },
    };
    const style = styles[tier] || styles.Supporter;

    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium border ${style.classes}`}>
            {React.cloneElement(style.icon, { className: 'w-3 h-3' })}
            {style.text}
        </span>
    );
};

const SupportSidebar = () => {
    // Placeholder data
    const impacts = [
        { icon: <FiShield />, title: 'Enhanced Security', desc: 'Advanced encryption and security measures for all users' },
        { icon: <FiZap />, title: 'Better Performance', desc: 'Faster servers and improved video/audio quality worldwide' },
        { icon: <FiUsers />, title: 'Growing Community', desc: 'Support for new features and community expansion' },
        { icon: <FiLock />, title: 'Privacy First', desc: 'Continued commitment to privacy and data protection' },
    ];

    const supporters = [
        { initials: 'AM', name: 'Alex M.', time: '2 hours ago', amount: 100, tier: 'Gold' },
        { initials: 'SL', name: 'Sarah L.', time: '1 day ago', amount: 50, tier: 'Silver' },
        { initials: 'MR', name: 'Mike R.', time: '2 days ago', amount: 25, tier: 'Bronze' },
        { initials: 'EW', name: 'Emma W.', time: '3 days ago', amount: 15, tier: 'Supporter' },
        { initials: 'DK', name: 'David K.', time: '1 week ago', amount: 100, tier: 'Gold' },
    ];

    const stats = [
        { label: 'Total Donations', value: '$12,847' },
        { label: 'Monthly Goal', value: '$5,000' },
        { label: 'Supporters', value: '234' },
        { label: 'This Month', value: '$3,247', highlight: true },
    ];

    return (
        <aside className="w-full lg:w-96 flex-shrink-0 space-y-6">
            {/* Your Impact Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Impact</h3>
                <p className="text-sm text-gray-500 mb-4">How your donation helps ShieldTalk</p>
                <ul className="space-y-4">
                    {impacts.map(item => (
                        <li key={item.title} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Supporters Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Recent Supporters</h3>
                <p className="text-sm text-gray-500 mb-4">Thank you to our amazing community!</p>
                <ul className="space-y-4">
                    {supporters.map(user => (
                        <li key={user.name} className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm font-bold">
                                    {user.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                    <p className="text-xs text-gray-400">{user.time}</p>
                                </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="text-sm font-bold text-gray-900">${user.amount}</p>
                                <SupporterBadge tier={user.tier} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Platform Stats Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Stats</h3>
                <ul className="space-y-3">
                    {stats.map(stat => (
                        <li key={stat.label} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{stat.label}</span>
                            <span className={`font-semibold ${stat.highlight ? 'text-green-600' : 'text-gray-900'}`}>
                                {stat.value}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SupportSidebar;