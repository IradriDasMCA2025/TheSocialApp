import React, { useState, useRef, useEffect } from 'react';
import {
    HiChatBubbleLeftRight,
    HiFunnel,
    HiFaceSmile,
    HiForward,
    HiCheckBadge
} from 'react-icons/hi2';
import { IoIosSend } from "react-icons/io";
import TextChatFilterSidebar from './TextChatFilterSidebar';

const TextChatInterface = () => {
    const [showFilterSidebar, setShowFilterSidebar] = useState(false);
    const [isChatActive, setIsChatActive] = useState(false);

    const toggleFilterSidebar = () => {
        setShowFilterSidebar(!showFilterSidebar);
    };

    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! Nice to meet you! 👋", sender: 'them', time: "10:02 AM" },
        { id: 2, text: "I see you're interested in technology too!", sender: 'them', time: "10:03 AM" }
    ]);
    const [inputValue, setInputValue] = useState("");

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isChatActive && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isChatActive]);

    const handleStartChat = () => setIsChatActive(true);
    const handleEndChat = () => {
        setIsChatActive(false);
        setMessages([
            { id: 1, text: "Hey! Nice to meet you! 👋", sender: 'them', time: "10:02 AM" },
            { id: 2, text: "I see you're interested in technology too!", sender: 'them', time: "10:03 AM" }
        ]);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: inputValue,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const quickReplies = [
        "Hi there! 👋",
        "How's your day?",
        "What do you do?",
        "Tell me about yourself",
        "What's your hobby?",
        "Nice to meet you!"
    ];

    return (
        <div className="relative min-h-screen bg-gray-50 flex flex-col">

            {/* HEADER */}
            <header className="bg-white border-b px-4 sm:px-6 py-4 flex justify-between items-center shadow-sm z-20 h-20">

                {/* LEFT */}
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow">
                        <HiChatBubbleLeftRight className="w-6 h-6 text-white" />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-gray-900">Text Chat</h1>

                        {!isChatActive ? (
                            <p className="text-sm text-gray-500">Ready to connect</p>
                        ) : (
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Connected with Jordan
                                <HiCheckBadge className="w-4 h-4 text-blue-500" />
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT (responsive buttons) */}
                <div className="flex items-center gap-2 sm:gap-3">

                    {!isChatActive ? (
                        <button onClick={toggleFilterSidebar}
                            className="flex items-center gap-2 px-3 py-2 border text-sm rounded-lg hover:bg-gray-50 sm:flex">
                            <HiFunnel className="w-4 h-4 text-gray-500" />
                            Filters
                        </button>
                    ) : (
                        <>
                            {/* Next */}
                            <button
                                className="hidden sm:flex items-center gap-1.5 px-3 py-2 border text-sm rounded-lg hover:bg-gray-50"
                            >
                                <HiForward className="w-4 h-4 text-gray-500" />
                                Next
                            </button>

                            {/* End */}
                            <button
                                onClick={handleEndChat}
                                className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                            >
                                End
                            </button>

                            {/* Filters */}
                            <button
                                onClick={toggleFilterSidebar}
                                className="hidden sm:flex items-center gap-2 px-3 py-2 border text-sm rounded-lg hover:bg-gray-50"
                            >
                                <HiFunnel className="w-4 h-4 text-gray-500" />
                                Filters
                            </button>
                        </>
                    )}

                    {/* ICON-ONLY FILTER BUTTON FOR MOBILE */}
                    <button
                        onClick={toggleFilterSidebar}
                        className="sm:hidden p-2 border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-95"
                    >
                        <HiFunnel className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </header>

            {/* MAIN */}
            <main className="flex-1 flex flex-col overflow-hidden">

                {/* START CHAT SCREEN */}
                {!isChatActive ? (
                    <div className="flex-1 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 max-w-md w-full text-center border">
                            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <HiChatBubbleLeftRight className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-2xl font-bold mb-3">Start a Conversation</h2>

                            <button
                                onClick={handleStartChat}
                                className="mt-6 w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow hover:opacity-90"
                            >
                                Start Chatting
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">

                        <div className="flex justify-center mb-4">
                            <div className="bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium">
                                Connected with Jordan • Tokyo, Japan
                            </div>
                        </div>

                        {/* Messages */}
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"
                                    } max-w-[85%] sm:max-w-[70%]`}
                            >
                                <div
                                    className={`px-5 py-3 rounded-2xl text-sm shadow-sm border ${msg.sender === "me"
                                        ? "bg-indigo-600 text-white rounded-tr-none border-indigo-600"
                                        : "bg-white text-gray-800 rounded-tl-none border-gray-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
                            </div>
                        ))}

                        <div ref={messagesEndRef} />
                    </div>
                )}
            </main>

            {/* FOOTER */}
            <footer className="bg-white border-t px-4 py-4 sm:px-6">

                {/* QUICK REPLIES */}
                {isChatActive && (
                    <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
                        {quickReplies.map((reply, idx) => (
                            <button
                                key={idx}
                                onClick={() => setInputValue(reply)}
                                className="flex-shrink-0 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {/* INPUT BAR */}
                <form
                    onSubmit={handleSendMessage}
                    className={`flex items-center gap-3 bg-white rounded-xl p-2 border shadow-sm ${isChatActive
                        ? "border-indigo-300 ring-2 ring-indigo-50"
                        : "opacity-60 cursor-not-allowed"
                        }`}
                >
                    <input
                        disabled={!isChatActive}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        placeholder={
                            isChatActive ? "Type a message..." : "Connect to start chatting"
                        }
                        className="flex-1 bg-transparent px-3 py-2 focus:outline-none"
                    />

                    <button
                        type="submit"
                        disabled={!inputValue.trim() || !isChatActive}
                        className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white disabled:opacity-50"
                    >
                        <IoIosSend className="w-5 h-5" />
                    </button>
                </form>
            </footer>

            <TextChatFilterSidebar
                isOpen={showFilterSidebar}
                onClose={() => setShowFilterSidebar(false)}
            />
        </div>
    );
};

export default TextChatInterface;
