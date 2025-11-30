import React from 'react';
import { FiGlobe } from 'react-icons/fi';

const CommunitySection = () => {
    const communityStats = [
        { countryCode: 'US', countryName: 'United States', members: '45,230', interest: 'Tech & Innovation' },
        { countryCode: 'JP', countryName: 'Japan', members: '32,180', interest: 'Culture & Art' },
        { countryCode: 'BR', countryName: 'Brazil', members: '28,950', interest: 'Music & Sports' },
        { countryCode: 'IN', countryName: 'India', members: '41,670', interest: 'Philosophy & Learning' },
        { countryCode: 'DE', countryName: 'Germany', members: '19,840', interest: 'Science & Engineering' },
        { countryCode: 'KR', countryName: 'South Korea', members: '25,320', interest: 'Gaming & Entertainment' },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
                        <FiGlobe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our Global Community
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Every day, thousands of people from different cultures, backgrounds, and stories come together to share their thoughts, learn from each other, and build lasting friendships.
                    </p>
                </div>

                {/* Community Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {communityStats.map((stat, index) => (
                        <div key={index} className="
                            bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-100 
                            flex flex-col justify-between 
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-2 hover:shadow-lg
                            text-center  /* <--- This is the fix */
                        ">
                            <div>
                                <p className="text-sm font-semibold text-gray-800 uppercase">
                                    {stat.countryCode} {stat.countryName}
                                </p>
                                <p className="text-4xl font-extrabold text-red-500 mt-2">
                                    {stat.members}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    Active Members
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-orange-200">
                                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200">
                                    {stat.interest}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;