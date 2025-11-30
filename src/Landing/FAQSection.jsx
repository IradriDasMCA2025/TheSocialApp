import React from 'react';

function FAQSection() {
    const faqs = [
        {
            question: "Can I change plans anytime?",
            answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle.",
        },
        {
            question: "Is there a free trial?",
            answer: "Shield Plus and Pro plans come with a 7-day free trial. No credit card required to start.",
        },
        // You can add more questions here
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Title */}
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-6 border rounded-lg shadow-sm bg-gray-50"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">
                                {faq.question}
                            </h3>
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;