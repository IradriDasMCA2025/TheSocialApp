import React from 'react';
import { FiStar } from 'react-icons/fi';

const ProfileReviewsTab = ({ hasReviews = false }) => { // Use prop to toggle empty state
    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Chat Reviews</h3>
            <p className="text-sm text-gray-500 mb-6">Feedback from other users</p>

            {/* Conditional Rendering: Show empty state or reviews */}
            {!hasReviews ? (
                <div className="text-center py-16">
                    <FiStar className="w-12 h-12 text-gray-300 mx-auto" />
                    <h4 className="mt-4 text-lg font-semibold text-gray-700">No Reviews Yet</h4>
                    <p className="mt-1 text-sm text-gray-500">Start chatting to receive reviews from other users</p>
                </div>
            ) : (
                <div>
                    {/* Placeholder for future reviews list:
                      <div className="space-y-4">
                        <div className="p-4 border-b">... review item ...</div>
                        <div className="p-4 border-b">... review item ...</div>
                      </div>
                    */}
                </div>
            )}
        </div>
    );
};

export default ProfileReviewsTab;