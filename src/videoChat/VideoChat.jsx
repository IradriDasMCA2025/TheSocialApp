import React, { useState, useRef, useEffect } from 'react';
import {
    FiMic, FiMicOff, FiVideo, FiVideoOff, FiVolume2, FiVolumeX,
    FiPhone, FiMessageSquare, FiFilter, FiMaximize, FiMinimize
} from 'react-icons/fi';
import VideoFilterSidebar from './VideoFilterSidebar'; // Import Filter Sidebar
// import 
import ChatSidebar from './ChatSidebar'; // Import Chat Sidebar

const VideoChatInterface = () => {
    // State
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true); // Default to true to attempt camera start
    const [isSpeakerOn, setIsSpeakerOn] = useState(true);
    const [isChatActive, setIsChatActive] = useState(false); // Is connected to a peer?
    const [showFilterSidebar, setShowFilterSidebar] = useState(false);
    const [showChatSidebar, setShowChatSidebar] = useState(false);
    const [error, setError] = useState(null);

    // Refs for video elements
    const localVideoRef = useRef(null);

    // Effect to handle camera access
    useEffect(() => {
        let stream = null;

        const startCamera = async () => {
            try {
                if (isVideoOn) {
                    // Request camera and microphone access
                    stream = await navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true
                    });

                    // Set the stream to the video element
                    if (localVideoRef.current) {
                        localVideoRef.current.srcObject = stream;
                    }
                    setError(null);
                } else {
                    // If video is toggled off, stop tracks
                    if (localVideoRef.current && localVideoRef.current.srcObject) {
                        const tracks = localVideoRef.current.srcObject.getTracks();
                        tracks.forEach(track => track.stop());
                        localVideoRef.current.srcObject = null;
                    }
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setError("Could not access camera. Please check permissions.");
                setIsVideoOn(false); // Reset state if failed
            }
        };

        startCamera();

        // Cleanup on unmount
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [isVideoOn]); // Re-run if isVideoOn changes (though logic handles toggle differently in real apps)

    // Handlers
    const toggleMic = () => setIsMicOn(!isMicOn);
    const toggleVideo = () => setIsVideoOn(!isVideoOn);
    const toggleSpeaker = () => setIsSpeakerOn(!isSpeakerOn);

    const toggleChat = () => {
        setIsChatActive(!isChatActive);
        if (isChatActive) {
            // End chat logic here
            console.log("Ending chat...");
        } else {
            // Start chat logic here
            console.log("Starting chat...");
        }
    };

    const toggleFilterSidebar = () => {
        setShowFilterSidebar(!showFilterSidebar);
        if (showChatSidebar) setShowChatSidebar(false); // Close chat if filter opens
    };

    const toggleChatSidebar = () => {
        setShowChatSidebar(!showChatSidebar);
        if (showFilterSidebar) setShowFilterSidebar(false); // Close filter if chat opens
    };

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden flex items-center justify-center p-4">

            {/* Top Left Utility Bar */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
                <button className="p-2 bg-black/20 hover:bg-black/30 rounded-lg text-white backdrop-blur-sm">
                    <FiMaximize className="w-4 h-4" />
                </button>
                {/* Add more utility buttons if needed */}
            </div>

            {/* Main Video Area / Placeholder State */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">

                {/* Error Message */}
                {error && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-700 px-4 py-2 rounded-lg z-20">
                        {error}
                    </div>
                )}

                {/* Main State (Placeholder for Remote Peer) */}
                {!isChatActive ? (
                    <div className="text-center text-white z-0">
                        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                            <FiVideo className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Ready to Connect?</h2>
                        <p className="text-white/80">Click "Start Chat" to find a match</p>
                    </div>
                ) : (
                    // Placeholder for Remote Video Stream
                    <div className="w-full h-full bg-black/40 flex items-center justify-center text-white">
                        <p>Searching for a match...</p>
                        {/* In a real app, the remote <video> element goes here */}
                    </div>
                )}

                {/* Self View (Picture-in-Picture) */}
                <div className="absolute bottom-24 right-4 w-48 h-36 bg-black rounded-xl overflow-hidden shadow-lg border-2 border-white/20 z-10">
                    {isVideoOn ? (
                        <video
                            ref={localVideoRef}
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                            <FiVideoOff className="w-8 h-8 text-gray-500" />
                        </div>
                    )}
                </div>

                {/* Control Bar (Floating Bottom) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-full flex items-center gap-3 shadow-2xl z-20">

                    {/* 1. Mute/Unmute */}
                    <button
                        onClick={toggleMic}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isMicOn ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-red-500 text-white hover:bg-red-600'}`}
                    >
                        {isMicOn ? <FiMic className="w-5 h-5" /> : <FiMicOff className="w-5 h-5" />}
                    </button>

                    {/* 2. Video On/Off */}
                    <button
                        onClick={toggleVideo}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isVideoOn ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-red-500 text-white hover:bg-red-600'}`}
                    >
                        {isVideoOn ? <FiVideo className="w-5 h-5" /> : <FiVideoOff className="w-5 h-5" />}
                    </button>

                    {/* 3. Speaker On/Off */}
                    <button
                        onClick={toggleSpeaker}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isSpeakerOn ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-600 text-white'}`}
                    >
                        {isSpeakerOn ? <FiVolume2 className="w-5 h-5" /> : <FiVolumeX className="w-5 h-5" />}
                    </button>

                    {/* 4. Start/End Chat (Primary) */}
                    <button
                        onClick={toggleChat}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg scale-105 mx-2 ${isChatActive ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                    >
                        <FiPhone className={`w-6 h-6 ${isChatActive ? 'transform rotate-[135deg]' : ''}`} />
                    </button>

                    {/* 5. Chat Sidebar Toggle */}
                    <button
                        onClick={toggleChatSidebar}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${showChatSidebar ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-900 hover:bg-gray-200'}`}
                    >
                        <FiMessageSquare className="w-5 h-5" />
                    </button>

                    {/* 6. Filter Sidebar Toggle */}
                    <button
                        onClick={toggleFilterSidebar}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${showFilterSidebar ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-900 hover:bg-gray-200'}`}
                    >
                        <FiFilter className="w-5 h-5" />
                    </button>
                </div>

                {/* Sidebars */}
                <VideoFilterSidebar isOpen={showFilterSidebar} onClose={() => setShowFilterSidebar(false)} />
                <ChatSidebar isOpen={showChatSidebar} onClose={() => setShowChatSidebar(false)} />

            </div>
        </div>
    );
};

export default VideoChatInterface;