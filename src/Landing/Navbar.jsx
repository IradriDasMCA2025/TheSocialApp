import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added for client-side routing
import { FiShield } from "react-icons/fi";
import { HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2';
import SignInModal from './SignInModal'; // Import the modal component

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false); // State for modal visibility


    // Updated data structure to use 'to' for React Router's Link component
    const navLinks = [
        {
            name: 'Product',
            // A top-level link for mobile view
            to: '/product',
            sublinks: [
                { name: 'Product', to: '/product' },
                { name: 'Features', to: '/features' },
                { name: 'Safety', to: '/safety' },
                { name: 'Pricing', to: '/pricing' },
                { name: 'Roadmap', to: '/roadmap' },
                { name: 'API', to: '/api' }
            ]
        },
        {
            name: 'Company',
            to: '/company',
            sublinks: [
                { name: 'About Us', to: '/about' },
                { name: 'Careers', to: '/careers' },
                { name: 'Join Us', to: '/joinus' },
                { name: 'Press kit', to: '/kit' },
                { name: 'Contact', to: '/contact' },
                { name: 'Blog', to: '/blog' }
            ]
        },
        {
            name: 'Resources',
            to: '/resources',
            sublinks: [
                { name: 'Help Center', to: '/help' },
                { name: 'Community', to: '/community' },
                { name: 'Guidlines', to: '/guidelines' },
                { name: 'Change Log', to: '/log' },
                { name: 'Status', to: '/status' }
            ]
        }
    ];

    // Function to open the modal
    const openSignInModal = () => setSignInModalOpen(true);
    // Function to close the modal
    const closeSignInModal = () => setSignInModalOpen(false);

    return (

        <>
            <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Left Side: Logo and Brand Name */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                                    <FiShield className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-800">ShieldTalk</span>
                            </Link>
                        </div>

                        {/* Center: Desktop Navigation Links with Dropdowns */}
                        <div className="hidden md:flex md:items-center md:space-x-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <button className="flex items-center gap-1 text-gray-600 group-hover:text-gray-900 transition-colors font-medium py-2 focus:outline-none">
                                        {link.name}
                                        <HiChevronDown className="w-4 h-4" />
                                    </button>
                                    {link.sublinks && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2 
                                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            {link.sublinks.map((sublink) => (
                                                <Link key={sublink.name} to={sublink.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Sign In Button & Mobile Menu Toggle */}
                        <div className="flex items-center">
                            {/* Updated Sign In to be a button that opens the modal */}
                            <div className="hidden md:block">
                                <button
                                    onClick={openSignInModal}
                                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                >
                                    Sign In
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                    aria-expanded={isMobileMenuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMobileMenuOpen ? <HiXMark className="block h-6 w-6" /> : <HiBars3 className="block h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.to} className="items-center gap-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                                    {link.name}
                                </Link>
                            ))}


                            <button
                                onClick={() => {
                                    openSignInModal();
                                    setMobileMenuOpen(false); // Optionally close mobile menu when opening modal
                                }}
                                className="w-full text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </nav>


            {/* Render the Modal */}
            <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />


        </>
    );
};

export default Navbar;