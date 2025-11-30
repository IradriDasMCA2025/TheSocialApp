import React from 'react';
import { FiWifi } from 'react-icons/fi'; // Icon for podcasts

const PodcastsTab = () => {
    // Placeholder data - replace with actual data fetching later
    const featuredPodcasts = [
        { title: 'Tech Talk Daily', host: 'Sarah', category: 'Technology', listeners: 234 },
        { title: 'Music & Vibes', host: 'DJ Mike', category: 'Music', listeners: 189 },
        { title: 'Coffee Chat', host: 'Emma', category: 'Lifestyle', listeners: 156 },
    ];

    return (
        // Main container - removed dark mode classes
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            {/* Header section - removed dark mode classes */}
            <div className="flex items-center gap-3 mb-1">
                <FiWifi className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">Featured Podcasts</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">Popular live shows and podcasts</p>

            {/* List of podcasts */}
            <div className="space-y-4">
                {featuredPodcasts.map((podcast, index) => (
                    // Individual podcast item - removed dark mode classes
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                            {/* Podcast Icon */}
                            <div className="w-10 h-10 rounded-lg bg-red-500 text-white flex items-center justify-center">
                                <FiWifi className="w-5 h-5" />
                            </div>
                            {/* Podcast Info */}
                            <div>
                                <p className="font-semibold text-gray-800">{podcast.title}</p>
                                <p className="text-xs text-gray-500">by {podcast.host} • {podcast.category}</p>
                            </div>
                        </div>
                        {/* Listener count - removed dark mode classes */}
                        <div className="flex items-center gap-2 text-sm text-green-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            {podcast.listeners} listening
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Ensure default export exists
export default PodcastsTab;

