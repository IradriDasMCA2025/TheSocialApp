import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShield, FiX, FiEye, FiEyeOff } from 'react-icons/fi';

const SignInModal = ({ isOpen, onClose }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('password');

    // NEW: active tab state
    const [activeTab, setActiveTab] = useState("signin");

    // Sign-Up fields
    const [signupUser, setSignupUser] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPass, setSignupPass] = useState("");

    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'password') {
            navigate('/admin/dashboard');
            onClose();
        } else if (username === 'user' && password === 'password') {
            onClose();
        } else {
            alert('Invalid username or password.');
        }
    };

    // NEW: Dummy signup handler (UI only)
    const handleSignup = (event) => {
        event.preventDefault();
        alert("Account created successfully (demo UI only)");
        setActiveTab("signin");
    };

    return (
        <div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <FiX className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center mb-6">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-3">
                        <FiShield className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">ShieldTalk</h2>
                    <p className="text-sm text-gray-500 mt-1">Sign in or create an account</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b mb-6">
                    <button
                        className={`flex-1 py-2 text-center font-semibold ${activeTab === "signin"
                            ? "text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("signin")}
                    >
                        Sign In
                    </button>

                    <button
                        className={`flex-1 py-2 text-center font-semibold ${activeTab === "signup"
                            ? "text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setActiveTab("signup")}
                    >
                        Sign Up
                    </button>
                </div>

                {/* ============ SIGN IN FORM ============ */}
                {activeTab === "signin" && (
                    <>
                        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-xs text-gray-600">
                            <p className="font-medium mb-1">Demo Credentials:</p>
                            <p>Admin: admin / password</p>
                            <p>User: user / password</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div className="mb-6 relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-9 text-gray-500"
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg"
                            >
                                Sign In
                            </button>
                        </form>
                    </>
                )}

                {/* ============ SIGN UP FORM ============ */}
                {activeTab === "signup" && (
                    <form onSubmit={handleSignup}>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                value={signupUser}
                                onChange={(e) => setSignupUser(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                value={signupPass}
                                onChange={(e) => setSignupPass(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold"
                        >
                            Create Account
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignInModal;
