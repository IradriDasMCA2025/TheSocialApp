import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar'; // Adjust path if needed
import OverviewTab from './OverviewTab';       // Adjust path if needed
import ActivityTab from './ActivityTab';       // Adjust path if needed
import PodcastsTab from './PodcastsTab';       // Adjust path if needed
import AchievementsTab from './AchievementsTab'; // Adjust path if needed

const AdminDashboard = () => {
    // State to keep track of the currently active tab
    const [activeTab, setActiveTab] = useState('Overview'); // Default to 'Overview'

    // Array defining the available tabs
    const tabs = ['Overview', 'Activity', 'Podcasts', 'Achievements'];

    // Function to render the appropriate tab content component based on the activeTab state
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Activity':
                return <ActivityTab />;
            case 'Podcasts':
                return <PodcastsTab />;
            case 'Achievements':
                return <AchievementsTab />;
            case 'Overview':
            default:
                return <OverviewTab />; // Default to Overview tab content
        }
    };

    return (
        // Main page container with a light gray background
        <div className="bg-gray-100 min-h-screen">

            {/* Main content area using Flexbox for sidebar + main layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">

                {/* Render the Sidebar Component */}
                <DashboardSidebar />

                {/* Main Content Area (takes remaining space) */}
                <main className="flex-1">
                    {/* Tab Navigation - Modified for full-width & equal distribution */}
                    {/* Removed space-x-1 */}
                    <div className="mb-6 border-b border-gray-200 flex">
                        {/* Map through the tabs array to create buttons */}
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)} // Update activeTab state on click
                                // Modified styles for full-width tabs
                                // Added flex-1
                                className={`flex-1 px-1 py-3 sm:px-6 text-center text-sm font-medium transition-colors duration-200 border-b-2 ${activeTab === tab
                                        ? 'border-indigo-500 text-indigo-600' // Active tab styles
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' // Inactive tab styles
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Render the Active Tab's Content */}
                    <div>
                        {renderTabContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;

