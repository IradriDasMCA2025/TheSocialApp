import React from 'react';
import { FiShield, FiLock, FiEye, FiXCircle, FiUserCheck, FiCpu, FiFlag, FiUser, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const SecuritySection = () => {
    const securityFeatures = [
        {
            icon: <FiLock />,
            title: "End-to-End Encryption",
            description: "Every message, call, and file is encrypted with military-grade security."
        },
        {
            icon: <FiEye />,
            title: "Real-time Monitoring",
            description: "AI-powered content moderation detects and filters inappropriate content."
        },
        {
            icon: <FiXCircle />,
            title: "Instant Blocking",
            description: "One-click blocking and reporting system to stop unwanted interactions."
        },
        {
            icon: <FiUserCheck />,
            title: "Age Verification",
            description: "Advanced verification system ensures age-appropriate matching."
        },
        {
            icon: <FiCpu />,
            title: "AI Behavior Detection",
            description: "Smart algorithms detect suspicious behavior patterns and prevent harm."
        },
        {
            icon: <FiFlag />,
            title: "Community Reporting",
            description: "Easy reporting tools help our community maintain a safe environment."
        }
    ];

    const certifications = ["SOC 2 Type II", "GDPR Compliant", "ISO 27001", "COPPA Safe"];

    const safetyGuidelines = [
        {
            icon: <FiAlertTriangle className="w-8 h-8 text-orange-500" />,
            title: "No Harassment",
            description: "Zero tolerance for bullying or inappropriate behavior."
        },
        {
            icon: <FiCheckCircle className="w-8 h-8 text-emerald-500" />,
            title: "Verify Identity",
            description: "Help others feel safe by completing verification."
        },
        {
            icon: <FiFlag className="w-8 h-8 text-blue-500" />,
            title: "Report Issues",
            description: "Use the report button if something doesn't feel right."
        },
        {
            icon: <FiShield className="w-8 h-8 text-purple-500" />,
            title: "Stay Protected",
            description: "Never share personal information or meet strangers."
        }
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column */}
                    <div>
                        <span className="inline-flex items-center gap-x-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                            <FiShield className="w-5 h-5" />Your Safety First
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            <span className="block text-gray-900">Built for</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Maximum Security</span>
                        </h2>

                        <p className="mt-6 text-lg text-gray-600">
                            ShieldTalk prioritizes your safety above everything else.
                            Our multi-layered security approach combines advanced encryption, AI moderation, and community oversight.
                        </p>

                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {securityFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-2xl">{feature.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                        <p className="mt-1 text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative h-[500px] lg:h-full">
                        <img src="https://images.unsplash.com/photo-1652739758426-56a564265f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGllbGQlMjBzZWN1cml0eSUyMHByb3RlY3Rpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODE5NzcxNHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Security personnel with digital interface" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" />

                        <div className="absolute top-8 left-[-20px] bg-white p-3 rounded-lg shadow-lg">
                            <p className="text-2xl font-bold text-emerald-500">99.9%</p>
                            <p className="text-sm text-gray-600">Safe Sessions</p>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-sm bg-white/80 backdrop-blur-md p-6 rounded-2xl text-center shadow-2xl">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full text-2xl">
                                <FiLock />
                            </div>
                            <h3 className="mt-3 font-bold text-gray-900">256-bit Encryption</h3>
                            <p className="mt-1 text-sm text-gray-600">Same security level used by banks and government agencies</p>
                        </div>

                        <div className="absolute bottom-8 right-[-20px] bg-white p-3 rounded-lg shadow-lg text-center">
                            <p className="text-2xl font-bold text-blue-500">&lt;1s</p>
                            <p className="text-sm text-gray-600">Response Time</p>
                        </div>
                    </div>
                </div>

                {/* Certifications and Guidelines sections */}
                <div className="mt-20 lg:mt-28">
                    <h3 className="text-xl font-semibold text-gray-800">Security Certifications</h3>
                    <div className="mt-6 flex flex-wrap gap-4">
                        {certifications.map((cert, index) => (
                            <span key={index} className="inline-flex items-center gap-x-2 bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full">
                                <FiUser className="w-4 h-4" />{cert}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-20 lg:mt-28 bg-slate-50 rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Community Safety Guidelines</h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Help us maintain a respectful and safe environment for everyone</p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {safetyGuidelines.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {item.icon}
                                <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;