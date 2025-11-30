import React from 'react';
import { FiCheck, FiZap, FiTool } from 'react-icons/fi';

const PricingPage = () => {
    // Data for the three main pricing plans
    const pricingPlans = [
        {
            name: 'Free',
            price: '0',
            period: '/forever',
            description: 'Perfect for casual conversations and meeting new people.',
            buttonText: 'Get Started Free',
            features: ['Unlimited text chat', 'Basic video calls (15 min)', 'Random matching', 'Public rooms'],
            isHighlighted: false,
        },
        {
            name: 'Shield Plus',
            price: '9.99',
            period: '/month',
            description: 'Enhanced features for power users and communities.',
            buttonText: 'Start Free Trial',
            tag: 'Most Popular',
            features: ['Everything in Free', 'Unlimited video calls', 'Interest-based matching', 'Private room hosting', 'No ads'],
            isHighlighted: true,
        },
        {
            name: 'Shield Pro',
            price: '19.99',
            period: '/month',
            description: 'Complete experience with AI features and global access.',
            buttonText: 'Go Pro',
            tag: 'Best Value',
            features: ['Everything in Shield Plus', 'AI auto-translation', 'Advanced AI matching', 'Analytics dashboard', 'Priority support'],
            isHighlighted: false,
        },
    ];

    // Data for the enterprise plan features
    const enterpriseFeatures = [
        'Custom branding',
        'Advanced analytics',
        'Dedicated account manager',
        'SLA guarantees',
        'Custom integrations'
    ];

    return (
        // Main section container with uniform vertical padding
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                        Simple Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">ShieldTalk</span> Experience
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Start free and upgrade as you grow. All plans include our core safety features and end-to-end encryption.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
                    {pricingPlans.map((plan, index) => (
                        // Individual Pricing Card
                        <div key={index} className={`relative flex flex-col p-8 rounded-2xl border ${plan.isHighlighted ? 'border-2 border-purple-600 shadow-2xl transform lg:scale-105' : 'border-gray-200'}`}>

                            {/* "Most Popular" / "Best Value" Tag */}
                            {plan.tag && (
                                <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wide text-white rounded-full ${plan.name === 'Shield Plus' ? 'bg-purple-600' : 'bg-fuchsia-500'}`}>
                                    {plan.tag}
                                </span>
                            )}

                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                                <p className="mt-4 text-6xl font-bold tracking-tight text-gray-900">
                                    ${plan.price}
                                    <span className="text-lg font-medium text-gray-500">{plan.period}</span>
                                </p>
                                <p className="mt-4 text-gray-600 h-12">{plan.description}</p>
                            </div>

                            {/* Call-to-Action Button */}
                            <a href="#" className={`w-full text-center mt-8 py-3 px-6 rounded-lg font-semibold transition ${plan.isHighlighted ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white hover:shadow-lg' : 'border border-gray-300 text-gray-800 hover:bg-gray-50'}`}>
                                {plan.buttonText}
                            </a>

                            {/* Features List */}
                            <ul className="mt-8 space-y-4 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Enterprise Plan Section */}
                <div className="mt-20 bg-slate-50 rounded-2xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Left Side: Enterprise Details */}
                        <div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <FiTool className="w-8 h-8 text-purple-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Enterprise Solutions</h2>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Need custom features, higher limits, or white-label solutions? Our enterprise plans are designed for organizations and large communities.
                            </p>
                            <h3 className="mt-8 font-semibold text-gray-800">Enterprise Features Include:</h3>
                            <ul className="mt-4 space-y-3">
                                {enterpriseFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        <FiZap className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Custom Pricing CTA */}
                        <div className="text-center bg-white p-8 rounded-xl shadow-lg lg:p-10">
                            <h3 className="text-3xl font-bold text-gray-900">Custom Pricing</h3>
                            <p className="mt-3 text-gray-600">Tailored to your organization's needs and scale.</p>
                            <a href="#" className="inline-block mt-6 w-full max-w-xs py-3 px-6 rounded-lg font-semibold transition border border-gray-300 text-gray-800 hover:bg-gray-50">
                                Contact Sales Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;