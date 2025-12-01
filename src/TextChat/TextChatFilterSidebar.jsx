import React, { useState } from 'react';
import { FiX, FiHeart, FiFlag, FiStar } from 'react-icons/fi';

const TextChatFilterSidebar = ({ isOpen, onClose }) => {
    const [ageRange, setAgeRange] = useState([18, 50]);
    const [verifiedOnly, setVerifiedOnly] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState(["Technology", "Music"]);

    const minGap = 5;
    const sliderMin = 18;
    const sliderMax = 100;

    const handleMin = (e) => {
        const value = Math.min(Number(e.target.value), ageRange[1] - minGap);
        setAgeRange([value, ageRange[1]]);
    };

    const handleMax = (e) => {
        const value = Math.max(Number(e.target.value), ageRange[0] + minGap);
        setAgeRange([ageRange[0], value]);
    };

    const getPercent = (val) =>
        Math.round(((val - sliderMin) / (sliderMax - sliderMin)) * 100);

    if (!isOpen) return null;

    return (
        <div
            className="
                absolute top-0 right-0 bottom-0 w-full
                sm:w-80 sm:top-4 sm:right-4 sm:bottom-4
                bg-white z-20 border border-gray-200 shadow-xl
                rounded-none sm:rounded-2xl 
                flex flex-col overflow-hidden animate-slideInRight
            "
        >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">Filters & Preferences</h2>
                <button onClick={onClose}><FiX className="w-5 h-5 text-gray-600" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* Mood */}
                <div>
                    <label className="text-sm font-semibold block mb-2">Chat Mood</label>
                    <select className="w-full p-2.5 bg-gray-50 border rounded-lg text-sm">
                        <option>Casual Chat</option>
                        <option>Professional</option>
                        <option>Study Buddy</option>
                        <option>Gaming</option>
                        <option>Language Exchange</option>
                        <option>Creative</option>
                        <option>Networking</option>
                    </select>
                </div>

                {/* Age Slider */}
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold">Age Range</span>
                        <span className="text-blue-600 font-semibold text-sm">
                            {ageRange[0]} - {ageRange[1]}
                        </span>
                    </div>

                    <div className="relative w-full h-12 flex items-center">
                        <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>

                        <div
                            className="absolute h-2 bg-blue-600 rounded-lg"
                            style={{
                                left: `${getPercent(ageRange[0])}%`,
                                width: `${getPercent(ageRange[1]) -
                                    getPercent(ageRange[0])}%`
                            }}
                        />

                        <input
                            type="range"
                            min={sliderMin}
                            max={sliderMax}
                            value={ageRange[0]}
                            onChange={handleMin}
                            className="absolute w-full bg-transparent pointer-events-none
                            [&::-webkit-slider-thumb]:pointer-events-auto
                            [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600"
                        />

                        <input
                            type="range"
                            min={sliderMin}
                            max={sliderMax}
                            value={ageRange[1]}
                            onChange={handleMax}
                            className="absolute w-full bg-transparent pointer-events-none
                            [&::-webkit-slider-thumb]:pointer-events-auto
                            [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600"
                        />
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Gender</label>
                    <select className="w-full p-2.5 bg-gray-50 border rounded-lg text-sm">
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                    </select>
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Location</label>
                    <select className="w-full p-2.5 bg-gray-50 border rounded-lg text-sm">
                        <option>Worldwide</option>
                        <option>Nearby</option>
                        <option>Same Country</option>
                        <option>Same Timezone</option>
                    </select>
                </div>

                {/* Verified Only */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Verified Only</span>
                    <button
                        onClick={() => setVerifiedOnly(!verifiedOnly)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${verifiedOnly ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    >
                        <span
                            className={`absolute h-4 w-4 bg-white rounded-full transform top-1 transition-transform ${verifiedOnly ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>

                {/* Interests */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Interests</label>
                    <div className="flex flex-wrap gap-2">
                        {["Technology", "Travel", "Music", "Art", "Sports"].map((interest) => (
                            <button
                                key={interest}
                                onClick={() => {
                                    if (selectedInterests.includes(interest)) {
                                        setSelectedInterests(
                                            selectedInterests.filter((i) => i !== interest)
                                        );
                                    } else {
                                        setSelectedInterests([
                                            ...selectedInterests,
                                            interest
                                        ]);
                                    }
                                }}
                                className={`px-3 py-1.5 border rounded-full text-xs ${selectedInterests.includes(interest)
                                    ? "bg-blue-100 border-blue-300 text-blue-700"
                                    : "bg-white border-gray-300 text-gray-600"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-6 p-4 bg-gray-50 border-t space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center gap-2">
                        <FiHeart /> Add as Friend
                    </button>

                    <button className="w-full border border-gray-300 py-2 rounded-lg text-gray-700 flex justify-center items-center gap-2">
                        <FiFlag /> Report User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextChatFilterSidebar;
