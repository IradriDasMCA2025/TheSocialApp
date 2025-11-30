// import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React from 'react';

import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { FiShield } from "react-icons/fi";


export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-700 py-10 px-4 sm:px-6 lg:px-16 border-t w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Logo and Description */}
                <div className="md:col-span-1">
                    <div className="flex items-center space-x-2">
                        <span className="bg-purple-600 text-white p-2 rounded-lg"><FiShield /></span>
                        <h2 className="font-bold text-lg">ShieldTalk</h2>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                        The future of safe social communication. Connect with people worldwide through encrypted video chats,
                        smart matching, and AI-powered features.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <Link to="/twitter" className="p-2 bg-gray-100 rounded-lg"><RiTwitterXLine /></Link>
                        <Link to="/github" className="p-2 bg-gray-100 rounded-lg"><VscGithubAlt /></Link>
                        <Link to="/linkedin" className="p-2 bg-gray-100 rounded-lg"><FiLinkedin /></Link>
                        <Link to="/contact" className="p-2 bg-gray-100 rounded-lg"><LuMail /></Link>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-semibold mb-3">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/safety">Safety</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/roadmap">Roadmap</Link></li>
                        <li><Link to="/api">API</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/press">Press Kit</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Platform */}
                <div>
                    <h3 className="font-semibold mb-3">Platform</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/voice-rooms">Voice Rooms</Link></li>
                        <li><Link to="/editor">Blog Editor</Link></li>
                        <li><Link to="/support">Support Us</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/help">Help Center</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/guidelines">Guidelines</Link></li>
                        <li><Link to="/status">Status</Link></li>
                        <li><Link to="/changelog">Changelog</Link></li>
                    </ul>
                </div>
            </div>

            {/* Legal Section */}
            <div className="max-w-7xl mx-auto mt-10 border-t pt-6 text-sm text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold mb-3 text-black">Legal</h3>
                    <ul className="flex flex-wrap gap-6">
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/cookies">Cookie Policy</Link></li>
                        <li><Link to="/dmca">DMCA</Link></li>
                        <li><Link to="/compliance">Compliance</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col md:items-end text-gray-500 text-sm space-y-1">
                    <p>© {new Date().getFullYear()} ShieldTalk. All rights reserved. • Built with privacy in mind</p>
                    <p>Made with <span className="text-red-500">❤</span> for safe connections</p>
                </div>
            </div>
        </footer>
    );
}