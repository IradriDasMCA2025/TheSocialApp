// import React, { useState } from 'react';
// import { useNavigate, Route, Routes } from 'react-router-dom'; // Import useNavigate for redirection
// import { FiShield, FiX, FiEye, FiEyeOff } from 'react-icons/fi'; // Icons for logo, close, and password visibility



// // SignInModal component accepts isOpen (boolean) and onClose (function) props
// const SignInModal = ({ isOpen, onClose }) => {
//     // State to toggle password visibility (show/hide)
//     const [showPassword, setShowPassword] = useState(false);
//     // State to store the username input value, initialized with 'admin' for demo
//     const [username, setUsername] = useState('admin');
//     // State to store the password input value, initialized with 'password' for demo
//     const [password, setPassword] = useState('password');

//     // Hook provided by react-router-dom to programmatically navigate
//     const navigate = useNavigate();

//     // If the modal isn't flagged as open, render nothing (null)
//     if (!isOpen) return null;

//     // Function to handle the form submission event
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default browser page reload on form submission

//         // Check if the entered credentials match the admin credentials
//         if (username === 'admin' && password === 'password') {
//             console.log('Admin login successful. Redirecting...'); // Log success
//             navigate('/admin/dashboard'); // Use navigate to go to the admin dashboard route
//             onClose(); // Close the modal after successful login/redirect
//         }
//         // Optional: Check if the entered credentials match the user credentials
//         else if (username === 'user' && password === 'password') {
//             console.log('User login successful.'); // Log success
//             // navigate('/dashboard'); // Example: redirect to a user dashboard (currently commented out)
//             onClose(); // Close the modal
//         }
//         // If credentials don't match admin or user
//         else {
//             console.log('Invalid credentials.'); // Log failure
//             // In a real app, you'd show an error message state here instead of an alert
//             alert('Invalid username or password.'); // Display a simple alert for invalid credentials
//         }
//     };

//     return (

//         // Modal Backdrop: Full screen, semi-transparent gray with blur effect
//         <div
//             className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             onClick={onClose} // Clicking the backdrop calls the onClose function (closes the modal)
//         >

//             {/* Modal Content Area: White background, rounded corners, shadow */}
//             <div
//                 className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative"
//                 onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it (stops propagation to the backdrop)
//             >
//                 {/* Close Button ('X' icon) */}
//                 <button
//                     onClick={onClose} // Clicking the 'X' calls the onClose function
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//                     aria-label="Close modal" // Accessibility label for screen readers
//                 >
//                     <FiX className="w-6 h-6" /> {/* Close icon */}
//                 </button>

//                 {/* Header Section: Logo, Title, Subtitle */}
//                 <div className="flex flex-col items-center mb-6">
//                     {/* Logo */}
//                     <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg inline-block mb-3">
//                         <FiShield className="w-7 h-7 text-white" /> {/* Shield icon */}
//                     </div>
//                     {/* Title */}
//                     <h2 className="text-xl font-bold text-gray-800">ShieldTalk</h2>
//                     {/* Subtitle */}
//                     <p className="text-sm text-gray-500 mt-1">Sign in to your account or create a new one to start connecting.</p>
//                 </div>

//                 {/* Tabs for Sign In / Sign Up */}
//                 <div className="flex border-b mb-6">
//                     {/* Active "Sign In" Tab */}
//                     <button className="flex-1 py-2 text-center font-semibold text-indigo-600 border-b-2 border-indigo-600">
//                         Sign In
//                     </button>
//                     {/* Inactive "Sign Up" Tab */}
//                     <button className="flex-1 py-2 text-center font-medium text-gray-500 hover:text-gray-700 transition-colors">
//                         Sign Up
//                     </button>
//                 </div>

//                 {/* Welcome Back Message */}
//                 <div className="mb-6">
//                     <h3 className="text-lg font-semibold text-gray-900">Welcome back</h3>
//                     <p className="text-sm text-gray-600">Enter your credentials to access your account</p>
//                 </div>

//                 {/* Demo Credentials Information Box */}
//                 <div className="bg-gray-50 p-4 rounded-lg mb-6 text-xs text-gray-600">
//                     <p className="font-medium mb-1">Demo Credentials:</p>
//                     <p>Admin: admin / password</p>
//                     <p>User: user / password</p>
//                 </div>

//                 {/* Sign In Form */}
//                 <form onSubmit={handleSubmit}> {/* Call handleSubmit when the form is submitted */}
//                     {/* Username Input Field */}
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
//                             Username
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username} // Bind input value to the username state
//                             onChange={(e) => setUsername(e.target.value)} // Update username state when input changes
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                             required // Make username required
//                         />
//                     </div>

//                     {/* Password Input Field */}
//                     <div className="mb-6 relative"> {/* Relative positioning for the eye icon */}
//                         <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
//                             id="password"
//                             value={password} // Bind input value to the password state
//                             onChange={(e) => setPassword(e.target.value)} // Update password state when input changes
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10" // Add padding-right for the icon
//                             required // Make password required
//                         />
//                         {/* Button to Toggle Password Visibility */}
//                         <button
//                             type="button" // Important: type="button" prevents form submission
//                             onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on click
//                             className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-gray-500 hover:text-gray-700" // Position the icon
//                             aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility label
//                         >
//                             {/* Conditionally render Eye or EyeOff icon */}
//                             {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
//                         </button>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit" // Standard submit button
//                         className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity"
//                     >
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignInModal; // Export the component for use in other files



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
