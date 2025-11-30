import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiHeart, FiMessageSquare, FiStar } from 'react-icons/fi';

const VideoFilterSidebar = ({ isOpen, onClose }) => {
    // State for double slider: [min, max]
    const [ageRange, setAgeRange] = useState([18, 50]);
    const [verifiedOnly, setVerifiedOnly] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState(['Technology', 'Music']);

    const minGap = 5; // Minimum gap between sliders
    const sliderMin = 18;
    const sliderMax = 100;

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), ageRange[1] - minGap);
        setAgeRange([value, ageRange[1]]);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), ageRange[0] + minGap);
        setAgeRange([ageRange[0], value]);
    };

    // Calculate percentage for background track styling
    const getPercent = (value) => Math.round(((value - sliderMin) / (sliderMax - sliderMin)) * 100);

    const chatMoods = [
        { label: 'Casual Chat', color: 'bg-blue-500' },
        { label: 'Professional', color: 'bg-green-500' },
        { label: 'Study Buddy', color: 'bg-purple-500' },
        { label: 'Gaming', color: 'bg-red-500' },
        { label: 'Language Exchange', color: 'bg-yellow-500' },
        { label: 'Creative', color: 'bg-pink-500' },
        { label: 'Networking', color: 'bg-indigo-500' },
    ];

    const interests = [
        'Technology', 'Travel', 'Music', 'Art', 'Sports', 'Gaming',
        'Photography', 'Cooking', 'Reading', 'Movies', 'Fitness', 'Nature'
    ];

    if (!isOpen) return null;

    return (
        <div className="absolute top-4 right-4 bottom-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col z-20 overflow-hidden animate-slideInRight">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Filters & Preferences</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <FiX className="w-5 h-5" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* Chat Mood */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Chat Mood</label>
                    <select className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        {chatMoods.map(mood => (
                            <option key={mood.label} value={mood.label}>{mood.label}</option>
                        ))}
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                        Professional mode disables gender and age filters for workplace-appropriate matching
                    </p>
                </div>

                {/* Age Range - Double Slider Implementation */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">Age Range</label>
                        <span className="text-sm font-medium text-blue-600">{ageRange[0]} - {ageRange[1]}</span>
                    </div>

                    <div className="relative w-full h-12 flex items-center">
                        {/* Track Background */}
                        <div className="absolute w-full h-2 bg-gray-200 rounded-lg z-0"></div>

                        {/* Active Range Track */}
                        <div
                            className="absolute h-2 bg-blue-600 rounded-lg z-0"
                            style={{
                                left: `${getPercent(ageRange[0])}%`,
                                width: `${getPercent(ageRange[1]) - getPercent(ageRange[0])}%`
                            }}
                        ></div>

                        {/* Min Slider Input */}
                        <input
                            type="range"
                            min={sliderMin}
                            max={sliderMax}
                            value={ageRange[0]}
                            onChange={handleMinChange}
                            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:border-none"
                        />

                        {/* Max Slider Input */}
                        <input
                            type="range"
                            min={sliderMin}
                            max={sliderMax}
                            value={ageRange[1]}
                            onChange={handleMaxChange}
                            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-20 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-600 [&::-moz-range-thumb]:border-none"
                        />
                    </div>
                </div>

                {/* Gender Preference */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender Preference</label>
                    <select className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <select className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Worldwide</option>
                        <option>Nearby(500 km)</option>
                        <option>Same Country</option>
                        <option>Same Timezone</option>
                    </select>
                </div>

                {/* Verified Only Toggle */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-700">Verified Users Only</label>
                    <button
                        onClick={() => setVerifiedOnly(!verifiedOnly)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${verifiedOnly ? 'bg-blue-600' : 'bg-gray-200'}`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${verifiedOnly ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                </div>

                {/* Common Interests */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Common Interests</label>
                    <div className="flex flex-wrap gap-2">
                        {interests.map(interest => (
                            <button
                                key={interest}
                                onClick={() => {
                                    if (selectedInterests.includes(interest)) {
                                        setSelectedInterests(selectedInterests.filter(i => i !== interest));
                                    } else {
                                        setSelectedInterests([...selectedInterests, interest]);
                                    }
                                }}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${selectedInterests.includes(interest)
                                    ? 'bg-blue-100 text-blue-700 border-blue-200'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats & Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-200 mt-auto">
                    <div className="bg-gray-800 text-white rounded-xl p-4 mb-4 shadow-lg">
                        <h3 className="text-sm font-medium text-gray-300 mb-3">Today's Stats</h3>
                        <div className="grid grid-cols-2 gap-y-1 text-sm">
                            <span className="text-gray-400">Connections:</span>
                            <span className="text-right font-mono">12</span>
                            <span className="text-gray-400">Total Time:</span>
                            <span className="text-right font-mono">2h 45m</span>
                            <span className="text-gray-400">Avg Rating:</span>
                            <span className="text-right font-mono flex items-center justify-end gap-1">4.8 <FiStar className="w-3 h-3 text-yellow-400 fill-current" /></span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                            <FiHeart className="w-4 h-4" /> Save as Friend
                        </button>
                        <button className="w-full py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                            <FiMessageSquare className="w-4 h-4" /> Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoFilterSidebar;