import React, { useState } from 'react';
import SupportBanner from './SupportBanner';
import SupportSidebar from './SupportSidebar';
import Navbar from '../Dashboard/Navbar';
import { FiGift, FiLock, FiHeart, FiDollarSign } from 'react-icons/fi'; // Icons

// --- Reusable Input Component ---
const InputField = ({ id, label, placeholder, type = 'text' }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <input
                type={type}
                name={id}
                id={id}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    </div>
);

// --- Main Donation Form Component (nested for clarity) ---
const DonationForm = () => {
    // 'one-time' or 'monthly'
    const [donationType, setDonationType] = useState('one-time');

    // Stores the selected value, e.g., 5, 10, 25, or 'custom'
    const [selectedAmountKey, setSelectedAmountKey] = useState(25);

    // Stores the value from the custom input field
    const [customAmount, setCustomAmount] = useState('');

    const oneTimeAmounts = [
        { key: 5, amount: '$5', desc: 'Buy us a coffee' },
        { key: 15, amount: '$15', desc: 'Support for a day' },
        { key: 25, amount: '$25', desc: 'Weekly server costs' },
        { key: 50, amount: '$50', desc: 'Monthly infrastructure' },
        { key: 100, amount: '$100', desc: 'Premium features development' },
        { key: 'custom', amount: <FiDollarSign />, desc: 'Custom Amount' },
    ];

    const monthlyAmounts = [
        { key: 10, amount: '$10/month', desc: 'Basic supporter' },
        { key: 25, amount: '$25/month', desc: 'Silver supporter' },
        { key: 50, amount: '$50/month', desc: 'Gold supporter' },
        { key: 'custom', amount: <FiDollarSign />, desc: 'Custom Monthly' },
    ];

    // Determine which amounts to display
    const amountsToShow = donationType === 'one-time' ? oneTimeAmounts : monthlyAmounts;

    // --- Dynamic Button Text Logic ---
    let donateButtonText = "Donate";
    if (selectedAmountKey === 'custom') {
        if (customAmount && customAmount > 0) {
            donateButtonText = `Donate $${customAmount}${donationType === 'monthly' ? '/month' : ''}`;
        } else {
            donateButtonText = "Enter an amount";
        }
    } else {
        const selected = amountsToShow.find(a => a.key === selectedAmountKey);
        donateButtonText = `Donate ${selected?.amount}`;
    }

    // Handle selecting a preset amount
    const handleAmountClick = (key) => {
        setSelectedAmountKey(key);
        // Clear custom amount if a preset is clicked
        if (key !== 'custom') {
            setCustomAmount('');
        }
    };

    // Handle changing the custom amount input
    const handleCustomAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
        setCustomAmount(value);
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            {/* Form Title */}
            <div className="flex items-center gap-3 mb-1">
                <FiGift className="w-5 h-5 text-gray-500" />
                <h2 className="text-xl font-semibold text-gray-900">Make a Donation</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">Choose your contribution amount and frequency</p>

            {/* Donation Type Tabs (One-time / Monthly) */}
            <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
                <button
                    onClick={() => { setDonationType('one-time'); setSelectedAmountKey(25); }}
                    className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${donationType === 'one-time' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    One-time
                </button>
                <button
                    onClick={() => { setDonationType('monthly'); setSelectedAmountKey(10); }}
                    className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${donationType === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    Monthly
                </button>
            </div>

            {/* Conditional "Monthly Support" Banner */}
            {donationType === 'monthly' && (
                <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg mb-6 text-sm">
                    ⚡ <span className="font-semibold">Monthly Support:</span> Monthly donations help us plan better and ensure consistent service improvements. You can cancel anytime from your account settings.
                </div>
            )}

            {/* Donation Amount Grid */}
            <p className="text-sm font-medium text-gray-700 mb-3">Select Amount</p>
            <div className="grid grid-cols-2 gap-4">
                {amountsToShow.map(item => (
                    <button
                        key={item.key}
                        type="button"
                        onClick={() => handleAmountClick(item.key)}
                        className={`p-4 rounded-lg border text-center transition-colors ${selectedAmountKey === item.key
                            ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-300' // Selected state
                            : 'bg-white border-gray-300 hover:bg-gray-50' // Default state
                            }`}
                    >
                        <span className="text-2xl font-bold text-gray-900">{item.amount}</span>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </button>
                ))}
            </div>

            {/* Conditional "Custom Amount" Input */}
            {selectedAmountKey === 'custom' && (
                <div className="mt-6">
                    <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700">
                        Custom Amount (USD)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            type="number"
                            name="customAmount"
                            id="customAmount"
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0.00"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                        />
                    </div>
                </div>
            )}

            {/* Payment Information Form */}
            <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <InputField id="firstName" label="First Name" placeholder="John" />
                    <InputField id="lastName" label="Last Name" placeholder="Doe" />
                </div>
                <InputField id="email" label="Email" placeholder="john@example.com" type="email" />
            </div>

            {/* Secure Payment Info */}
            <div className="mt-8 pt-6 border-t">
                <div className="flex items-start gap-3">
                    <FiLock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-medium text-gray-800">Secure Payment</h4>
                        <p className="text-sm text-gray-500">Payment processing is handled by Stripe with industry-standard security. Your payment information is encrypted and never stored on our servers.</p>
                    </div>
                </div>
            </div>

            {/* Sticky Donate Button */}
            <div className="mt-8 pt-6 border-t">
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                    <FiHeart className="w-5 h-5" />
                    {donateButtonText}
                </button>
            </div>
        </div>
    );
};

// --- Main Page Component ---
const SupportUsPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen">
                {/* 1. Support Banner */}
                <SupportBanner />

                {/* 2. Main Content (Two-Column Layout) */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* Left Column (Main Donation Form) */}
                        <main className="flex-1">
                            <DonationForm />
                        </main>

                        {/* Right Sidebar */}
                        <SupportSidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportUsPage;