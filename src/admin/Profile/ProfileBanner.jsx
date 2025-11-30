import React, { useState } from 'react'; // --- Updated: Added useState
import { Link } from 'react-router-dom';
import {
    FiShield,
    FiCheckCircle,
    FiAward,
    FiGift,
    FiMapPin,
    FiCalendar,
    FiClock,
    FiStar,
    FiGlobe,
    FiEdit3,
    FiSettings,
    FiUserPlus,
    FiShare2,
    FiCamera,
    FiUserCheck // --- New: Icon for 'Following' state
} from 'react-icons/fi'; // Using a broad set of icons

const ProfileBanner = () => {
    // --- New State: For Follow button ---
    const [isFollowing, setIsFollowing] = useState(false);

    // Placeholder data for the user
    const user = {
        initials: 'AU',
        name: 'Admin User',
        location: 'United States',
        joinDate: 'Joined January 2024',
        lastSeen: 'Last seen 2 hours ago',
        rating: '4.8',
        languages: 'English, Spanish, French',
        badges: [
            { name: 'Shield Plus', icon: <FiShield />, color: 'blue' },
            { name: 'Verified', icon: <FiCheckCircle />, color: 'green' },
            { name: 'Early Adopter', icon: <FiAward />, color: 'orange' },
            { name: 'Community Supporter', icon: <FiGift />, color: 'red' },
        ]
    };

    // Helper to get badge colors
    const badgeColors = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-green-100 text-green-700',
        orange: 'bg-orange-100 text-orange-700',
        red: 'bg-red-100 text-red-700',
    };

    // --- New: Handler for Follow button click ---
    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
        // In a real app, you would also make an API call here
        console.log(isFollowing ? "Unfollowing..." : "Following...");
    };

    return (
        // Main section with gradient background
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Flex container for responsive layout */}
                <div className="flex flex-col md:flex-row items-center gap-6">

                    {/* 1. Avatar */}
                    <div className="relative flex-shrink-0">
                        {/* Large Avatar */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl font-semibold border-4 border-white shadow-lg">
                            {user.initials}
                        </div>
                        {/* Upload Button */}
                        <button
                            className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            aria-label="Upload profile picture"
                        >
                            <FiCamera className="w-4 h-4" />
                        </button>
                    </div>

                    {/* 2. User Info (Grows to fill space) */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Row 1: Name + Badges */}
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <h1 className="text-3xl font-extrabold text-gray-900">{user.name}</h1>
                            <div className="flex flex-wrap justify-center gap-2">
                                {user.badges.map(badge => (
                                    <span
                                        key={badge.name}
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColors[badge.color]}`}
                                    >
                                        {React.cloneElement(badge.icon, { className: 'w-3 h-3' })}
                                        {badge.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Metadata (Location, Joined, Last Seen) */}
                        <div className="mt-3 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1.5"><FiMapPin className="w-4 h-4" /> {user.location}</span>
                            <span className="flex items-center gap-1.5"><FiCalendar className="w-4 h-4" /> {user.joinDate}</span>
                            <span className="flex items-center gap-1.5"><FiClock className="w-4 h-4" /> {user.lastSeen}</span>
                        </div>

                        {/* Row 3: Metadata (Rating, Languages) */}
                        <div className="mt-2 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1.5">
                                <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-bold text-gray-800">{user.rating}</span>
                            </span>
                            <span className="flex items-center gap-1.5"><FiGlobe className="w-4 h-4" /> {user.languages}</span>
                        </div>
                    </div>

                    {/* 3. Action Buttons (Shrinks) */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                            to="/admin/profile/edit"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <FiEdit3 className="w-4 h-4" />
                            Edit Profile
                        </Link>
                        <Link
                            to="/admin/settings"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <FiSettings className="w-4 h-4" />
                            Settings
                        </Link>
                        {/* --- Updated Follow Button --- */}
                        <button
                            onClick={handleFollowToggle}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-colors ${isFollowing
                                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' // Following state
                                    : 'bg-blue-600 text-white hover:bg-blue-700' // Initial 'Follow' state
                                }`}
                        >
                            {isFollowing ? <FiUserCheck className="w-4 h-4" /> : <FiUserPlus className="w-4 h-4" />}
                            {isFollowing ? 'Following' : 'Follow'}
                        </button>
                        {/* --- End Updated Follow Button --- */}
                        <Link
                            to="#" // Share action
                            className="inline-flex items-center justify-center p-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <FiShare2 className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileBanner;