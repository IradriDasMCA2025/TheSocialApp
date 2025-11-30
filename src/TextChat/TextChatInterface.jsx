import React, { useState, useRef, useEffect } from 'react';

import {
    HiChatBubbleLeftRight,
    HiFunnel,
    HiFaceSmile,
    HiPhoto,
    HiPaperClip,
    HiPaperAirplane,
    HiCheckBadge, // For verified tick
    HiForward, // For 'Next' button
    HiXMark // For 'End Chat' (or similar)
} from 'react-icons/hi2';
import { IoIosSend } from "react-icons/io";
import TextChatFilterSidebar from './TextChatFilterSidebar';
// import VideoFilterSidebar from '../videoChat/VideoFilterSidebar';

const TextChatInterface = () => {

    const [showFilterSidebar, setShowFilterSidebar] = useState(false);

    const toggleFilterSidebar = () => {
        setShowFilterSidebar(!showFilterSidebar);
    };

    // State to track if chat has started
    const [isChatActive, setIsChatActive] = useState(false);
    // State for messages
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! Nice to meet you! 👋", sender: 'them', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        { id: 2, text: "I see you're interested in technology too! What do you work on?", sender: 'them', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    // State for input
    const [inputValue, setInputValue] = useState("");

    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (isChatActive && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isChatActive]);

    const handleStartChat = () => {
        setIsChatActive(true);
    };

    const handleEndChat = () => {
        setIsChatActive(false);
        setMessages([ // Reset messages for next time (optional)
            { id: 1, text: "Hey! Nice to meet you! 👋", sender: 'them', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
            { id: 2, text: "I see you're interested in technology too! What do you work on?", sender: 'them', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const handleQuickReply = (text) => {
        setInputValue(text);
        // Optional: Auto-send on click
        // handleSendMessage({ preventDefault: () => {} });
    };

    const quickReplies = [
        "Hi there! 👋", "How's your day going?", "What are you interested in?",
        "Nice to meet you!", "Tell me about yourself", "What's your favorite hobby?"
    ];

    return (
        <div className="relative min-h-screen bg-gray-50 flex flex-col font-sans">

            {/* --- Header --- */}
            <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex justify-between items-center shadow-sm z-10 h-20">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-sm">
                        <HiChatBubbleLeftRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900 leading-tight">Text Chat</h1>
                        {/* Dynamic Subtitle */}
                        {!isChatActive ? (
                            <p className="text-sm text-gray-500 leading-none">Ready to connect</p>
                        ) : (
                            <div className="flex items-center gap-1 text-sm text-gray-500 leading-none">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                Connected with Jordan
                                <HiCheckBadge className="w-4 h-4 text-blue-500" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Dynamic Right Actions */}
                <div className="flex items-center gap-3">
                    {!isChatActive ? (
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                            <HiFunnel className="w-4 h-4 text-gray-500" />
                            Filters
                        </button>
                    ) : (
                        <>
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                                <HiForward className="w-4 h-4 text-gray-500" />
                                Next
                            </button>
                            <button
                                onClick={handleEndChat}
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-lg text-sm font-medium text-white hover:bg-red-700 transition-colors shadow-sm"
                            >
                                End Chat
                            </button>
                            <button
                                onClick={toggleFilterSidebar}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                <HiFunnel className="w-4 h-4 text-gray-500" />
                                Filters
                            </button>


                        </>
                    )}
                </div>
            </header>

            {/* --- Main Content --- */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
                {!isChatActive ? (
                    // --- INITIAL STATE: Centered Card ---
                    <div className="flex-1 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-indigo-50">
                                <HiChatBubbleLeftRight className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Start a Conversation</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                Connect with someone new and start chatting instantly.
                            </p>
                            <button
                                onClick={handleStartChat}
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 hover:shadow-xl transition-all transform active:scale-95"
                            >
                                Start Chatting
                            </button>
                        </div>
                    </div>
                ) : (
                    // --- ACTIVE STATE: Chat Area ---
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 bg-gray-50">
                        {/* Connection Banner */}
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Connected with Jordan from Tokyo, Japan
                            </div>
                        </div>

                        {/* Messages */}
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[70%]`}>
                                <div className={`px-5 py-3 rounded-2xl text-sm shadow-sm border ${msg.sender === 'me'
                                    ? 'bg-indigo-600 text-white rounded-tr-none border-indigo-600'
                                    : 'bg-white text-gray-800 rounded-tl-none border-gray-200'
                                    }`}>
                                    {msg.text}
                                </div>
                                <span className="text-xs text-gray-400 mt-1 ml-1">{msg.time}</span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </main>

            {/* --- Footer --- */}
            <footer className="bg-white border-t border-gray-200 p-4 pb-6 z-10">
                <div className="container mx-auto max-w-5xl">

                    {/* Active State: Quick Replies */}
                    {isChatActive && (
                        <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
                            {quickReplies.map((reply, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickReply(reply)}
                                    className="flex-shrink-0 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap shadow-sm"
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Bar */}
                    <form onSubmit={handleSendMessage} className={`flex items-center gap-3 bg-white rounded-xl p-2 border transition-all duration-200 ${isChatActive ? 'border-indigo-200 shadow-md ring-2 ring-indigo-50' : 'border-gray-200 opacity-60 cursor-not-allowed bg-gray-50'}`}>
                        <input
                            type="text"
                            placeholder={isChatActive ? "Type a message..." : "Connect to start chatting"}
                            disabled={!isChatActive}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className={`flex-1 bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 px-4 py-2 w-full outline-none ${!isChatActive && 'cursor-not-allowed'}`}
                        />
                        <div className="flex items-center gap-2 sm:gap-3 pr-2 text-gray-400">
                            {isChatActive && (
                                <button type="button" className="hover:text-indigo-500 transition-colors"><HiFaceSmile className="w-6 h-6" /></button>
                            )}
                            {!isChatActive && <HiFaceSmile className="w-6 h-6" />} {/* Disabled icon */}

                            {isChatActive ? (
                                <button type="submit" disabled={!inputValue.trim()} className="h-10 w-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center justify-center transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                    <IoIosSend className="w-5 h-5 text-white" />
                                </button>
                            ) : (
                                <div className="h-9 w-9 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <IoIosSend className="w-5 h-5 text-indigo-400" />
                                </div>
                            )}
                        </div>
                    </form>

                    {/* Decorative Emojis (Bottom Row) */}
                    <div className="flex justify-center gap-4 sm:gap-6 mt-4 text-xl sm:text-2xl select-none cursor-pointer">
                        {['😊', '😄', '🧐', '👍', '💗', '🎉', '😎', '🔥', '💫', '🌟'].map((emoji, i) => (
                            <span key={i} className={`transition-all hover:scale-125 ${!isChatActive ? 'opacity-40 grayscale filter pointer-events-none' : 'hover:opacity-100 opacity-80'}`}>{emoji}</span>
                        ))}
                    </div>
                </div>
            </footer>



            {/* Sidebars */}
            <TextChatFilterSidebar isOpen={showFilterSidebar} onClose={() => setShowFilterSidebar(false)} />
        </div>
    );
};

export default TextChatInterface;