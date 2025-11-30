import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    FiShield, FiHome, FiUser, FiBox, FiBriefcase, FiBookOpen,
    FiSettings, FiUsers, FiHelpCircle, FiLogOut, FiChevronRight
} from 'react-icons/fi'; // Removed FiSun, FiMoon

const Navbar = () => {
    // --- State ---
    const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

    // --- Refs ---
    const dropdownRef = useRef(null); // Ref for the main admin dropdown container

    // --- Admin Dropdown Logic ---
    const toggleAdminDropdown = () => setIsAdminDropdownOpen(!isAdminDropdownOpen);

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAdminDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    // --- Data Structure for Menus ---
    // (Keep the existing adminMenuItems and logoutItem data structure)
    const adminMenuItems = [
        { id: 'home', icon: <FiHome />, text: 'Home (Dashboard)', to: '/admin/dashboard' },
        { id: 'profile', icon: <FiUser />, text: 'Profile', to: '/admin/profile' },
        {
            id: 'product', icon: <FiBox />, text: 'Product', hasSubmenu: true, sublinks: [
                { name: 'Product Overview', to: '/admin/product/overview' }, { name: 'Features', to: '/admin/product/features' }, { name: 'Safety', to: '/admin/product/safety' }, { name: 'Pricing', to: '/admin/product/pricing' }, { name: 'Roadmap', to: '/admin/product/roadmap' }, { name: 'API', to: '/admin/product/api' },
            ]
        },
        {
            id: 'company', icon: <FiBriefcase />, text: 'Company', hasSubmenu: true, sublinks: [
                { name: 'About Us', to: '/admin/company/about' }, { name: 'Careers', to: '/admin/company/careers' }, { name: 'Join Us', to: '/admin/company/join' }, { name: 'Press Kit', to: '/admin/company/press' }, { name: 'Blog', to: '/admin/company/blog' }, { name: 'Contact', to: '/admin/company/contact' },
            ]
        },
        {
            id: 'resources', icon: <FiBookOpen />, text: 'Resources', hasSubmenu: true, sublinks: [
                { name: 'Help Center', to: '/help' }, { name: 'Community', to: '/community' }, { name: 'Guidelines', to: '/guidelines' }, { name: 'Status', to: '/status' }, { name: 'Changelog', to: '/changelog' },
            ]
        },
        { id: 'settings', icon: <FiSettings />, text: 'Settings', to: '/admin/settings' },
        { id: 'adminPanel', icon: <FiShield />, text: 'Admin Panel', to: '/admin/panel' },
        { id: 'managerPanel', icon: <FiUsers />, text: 'Manager Panel', to: '/admin/manager' },
        { id: 'help', icon: <FiHelpCircle />, text: 'Help', to: '/help' },
    ];
    const logoutItem = { icon: <FiLogOut />, text: 'Log out', action: () => console.log('Log out clicked') };

    // --- Render ---
    return (
        // REMOVED: dark mode classes from nav
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
            <div className="container mx-auto px-4 sm-px-6 lg-px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                                <FiShield className="w-6 h-6 text-white" />
                            </div>
                            {/* REMOVED: dark mode class from span */}
                            <span className="text-xl font-bold text-gray-800">ShieldTalk</span>
                        </Link>
                    </div>

                    {/* Right Side: Admin Profile Dropdown ONLY */}
                    {/* REMOVED: Outer flex container and gap */}
                    <div className="flex items-center">
                        {/* REMOVED: Theme Toggle Button */}

                        {/* Admin Profile Dropdown Trigger */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleAdminDropdown}
                                type="button"
                                // REMOVED: dark mode classes from button
                                className="w-9 h-9 flex items-center justify-center bg-blue-100 rounded-full text-sm font-semibold text-blue-700 border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                aria-haspopup="true"
                                aria-expanded={isAdminDropdownOpen}
                            >
                                AU
                            </button>

                            {/* Main Admin Dropdown Menu */}
                            {isAdminDropdownOpen && (
                                // REMOVED: dark mode classes from dropdown container
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 origin-top-right py-1">
                                    {/* User Info Header */}
                                    {/* REMOVED: dark mode classes */}
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                        <p className="text-xs text-gray-500">admin@shieldtalk.com</p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-1">
                                        {adminMenuItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative group"
                                            >
                                                {/* Main menu item link */}
                                                <Link
                                                    to={item.to || '#'}
                                                    // REMOVED: dark mode classes
                                                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => !item.hasSubmenu && setIsAdminDropdownOpen(false)}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        {item.icon}
                                                        {item.text}
                                                    </span>
                                                    {item.hasSubmenu && <FiChevronRight className="w-4 h-4 text-gray-400" />}
                                                </Link>

                                                {/* Nested Submenu - CORRECTED POSITIONING */}
                                                {item.hasSubmenu && item.sublinks && (
                                                    // REMOVED: dark mode classes
                                                    <div className="absolute top-0 right-full mr-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2 z-10
                                                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 delay-100">
                                                        {item.sublinks.map((sublink) => (
                                                            <Link
                                                                key={sublink.name}
                                                                to={sublink.to}
                                                                // REMOVED: dark mode classes
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                onClick={() => { setIsAdminDropdownOpen(false); }}
                                                            >
                                                                {sublink.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Logout Button */}
                                    {/* REMOVED: dark mode classes */}
                                    <div className="border-t border-gray-200 py-1">
                                        <button
                                            onClick={() => { logoutItem.action(); setIsAdminDropdownOpen(false); }}
                                            // REMOVED: dark mode classes
                                            className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            {logoutItem.icon}
                                            {logoutItem.text}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

