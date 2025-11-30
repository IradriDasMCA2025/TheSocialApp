import React from 'react';
import { FiMail } from 'react-icons/fi';

function NewsletterSection() {
    return (
        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Stay Updated with ShieldTalk
                    </h2>

                    {/* Subheading */}
                    <p className="mt-4 text-lg text-gray-600">
                        Get the latest updates on new features, security improvements, and community highlights.
                    </p>

                    {/* Input + Button */}
                    <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow hover:opacity-90 transition"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Small note */}
                    <p className="mt-4 text-sm text-gray-500">
                        No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;