import React, { useState } from 'react';
import Navbar from '../Dashboard/Navbar';
import ProfileBanner from './ProfileBanner'; // Adjust path
import ProfileSidebar from './ProfileSidebar'; // Adjust path
import ProfileActivityTab from './ProfileActivityTab'; // Adjust path
import ProfileAchievementsTab from './ProfileAchievementsTab'; // Adjust path
import ProfileReviewsTab from './ProfileReviewsTab'; // Adjust path

const ProfilePage = () => {
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('Activity');

    // Tab definitions
    const tabs = ['Activity', 'Achievements', 'Reviews'];

    // Function to render the correct tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Achievements':
                return <ProfileAchievementsTab />;
            case 'Reviews':
                return <ProfileReviewsTab hasReviews={false} />; // Pass prop to show empty state
            case 'Activity':
            default:
                return <ProfileActivityTab />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            {/* 1. Profile Banner (Spans full width) */}
            <ProfileBanner />

            {/* 2. Main Content (Sidebar + Tabs) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Sidebar */}
                    <ProfileSidebar />

                    {/* Right Main Content */}
                    <main className="flex-1">
                        {/* Tab Navigation - MODIFIED FOR EQUAL DISTRIBUTION */}
                        <div className="mb-6 border-b border-gray-200 flex"> {/* Removed space-x-1 */}
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 px-1 py-3 sm:px-6 text-center text-sm font-medium transition-colors duration-200 border-b-2 ${ // Added flex-1
                                        activeTab === tab
                                            ? 'border-indigo-500 text-indigo-600' // Active tab
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // Inactive tab
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Render Active Tab Content */}
                        <div>
                            {renderTabContent()}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;