import React from 'react';
import {
    HiOutlineSparkles, HiOutlineVideoCamera,
    HiOutlineShieldCheck, HiOutlineUsers,
    HiOutlineChatBubbleOvalLeftEllipsis,
    HiOutlineLockClosed, HiOutlineGlobeAlt,
    HiOutlineLanguage, HiOutlineUserCircle,
    HiOutlineFaceSmile, HiOutlineMusicalNote,
    HiOutlineHeart, HiOutlineBolt
} from 'react-icons/hi2';

const FeatureSection = () => {
    const features = [
        {
            title: 'HD Video Chat',
            description: 'Crystal clear video calls with adaptive quality that adjusts to your connection.',
            icon: <HiOutlineVideoCamera />,
            color: 'blue'
        },
        {
            title: 'End-to-End Encryption',
            description: 'Military-grade encryption ensures your conversations stay completely private.',
            icon: <HiOutlineShieldCheck />,
            color: 'green'
        },
        {
            title: 'Random Matching',
            description: "Meet new people instantly with our smart matching algorithm and 'Next' button.",
            icon: <HiOutlineUsers />,
            color: 'purple'
        },
        {
            title: 'Multi-Format Chat',
            description: 'Text, audio, video, and rich media sharing all in one seamless experience.',
            icon: <HiOutlineChatBubbleOvalLeftEllipsis />,
            color: 'orange'
        },
        {
            title: 'Private Rooms',
            description: 'Create password-protected rooms and share links with friends for exclusive chats.',
            icon: <HiOutlineLockClosed />,
            color: 'red'
        },
        {
            title: 'Interest Matching',
            description: 'Connect with people who share your hobbies, languages, and interests.',
            icon: <HiOutlineGlobeAlt />,
            color: 'teal'
        },
        {
            title: 'AI Auto-Translate',
            description: 'Break language barriers with real-time AI-powered translation in 100+ languages.',
            icon: <HiOutlineLanguage />,
            color: 'indigo'
        },
        {
            title: 'Safe Mode',
            description: 'Advanced content filtering and age verification keep conversations appropriate.',
            icon: <HiOutlineUserCircle />,
            color: 'pink'
        },
        {
            title: 'Fun Interactions',
            description: 'Emojis, stickers, virtual backgrounds, and interactive games to enhance conversations.',
            icon: <HiOutlineFaceSmile />,
            color: 'yellow'
        },
        {
            title: 'Audio Rooms',
            description: 'Join voice-only rooms for casual conversations and community discussions.',
            icon: <HiOutlineMusicalNote />,
            color: 'sky'
        },
        {
            title: 'Friendship System',
            description: 'Add friends, create 24-hour connections, and build meaningful relationships.',
            icon: <HiOutlineHeart />,
            color: 'rose'
        },
        {
            title: 'Instant Connection',
            description: 'Lightning-fast matching with global servers and optimized WebRTC connections.',
            icon: <HiOutlineBolt />,
            color: 'lime'
        },
    ];

    const roadmap = [
        { version: 'V1', title: 'Core MVP', status: 'Live', color: 'green' },
        { version: 'V2', title: 'Social & Safe', status: 'In Progress', color: 'blue' },
        { version: 'V3', title: 'AI & Monetization', status: 'Planned', color: 'purple' },
        { version: 'V4', title: 'Premium Expansion', status: 'Future', color: 'orange' },
        { version: 'V5', title: 'Visionary AI', status: 'Vision', color: 'pink' },
    ];

    const colorClasses = {
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', shadow: 'hover:shadow-blue-500/20' },
        green: { bg: 'bg-green-100', text: 'text-green-600', shadow: 'hover:shadow-green-500/20' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', shadow: 'hover:shadow-purple-500/20' },
        orange: { bg: 'bg-orange-100', text: 'text-orange-600', shadow: 'hover:shadow-orange-500/20' },
        red: { bg: 'bg-red-100', text: 'text-red-600', shadow: 'hover:shadow-red-500/20' },
        teal: { bg: 'bg-teal-100', text: 'text-teal-600', shadow: 'hover:shadow-teal-500/20' },
        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', shadow: 'hover:shadow-indigo-500/20' },
        pink: { bg: 'bg-pink-100', text: 'text-pink-600', shadow: 'hover:shadow-pink-500/20' },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', shadow: 'hover:shadow-yellow-500/20' },
        sky: { bg: 'bg-sky-100', text: 'text-sky-600', shadow: 'hover:shadow-sky-500/20' },
        rose: { bg: 'bg-rose-100', text: 'text-rose-600', shadow: 'hover:shadow-rose-500/20' },
        lime: { bg: 'bg-lime-100', text: 'text-lime-600', shadow: 'hover:shadow-lime-500/20' },
    };

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-x-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                        <HiOutlineSparkles />
                        Powerful Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Everything You Need for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Safe Social Connection</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        From basic video chats to AI-powered matching and translation, ShieldTalk evolves with your needs across our comprehensive roadmap.
                    </p>
                </div>

                {/* Features Grid (Responsive Flexbox) */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className={`w-full sm:w-80 lg:w-96 p-8 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colorClasses[feature.color].shadow}`}>
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-2xl ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text}`}>
                                {feature.icon}
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Roadmap Section */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Our Evolution Roadmap
                    </h2>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {roadmap.map((item) => (
                            <div key={item.version} className={`p-6 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colorClasses[item.color].shadow}`}>
                                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${colorClasses[item.color].bg} ${colorClasses[item.color].text}`}>
                                    {item.version}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{item.status}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeatureSection;