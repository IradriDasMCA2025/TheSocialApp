import React, { useState, useRef, useEffect } from 'react';
import { FiX, FiSend } from 'react-icons/fi';

const ChatSidebar = ({ isOpen, onClose }) => {
    // State for the list of messages
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! Nice to meet you.", sender: 'them', time: "10:02 AM" },
        { id: 2, text: "Hi there! Where are you from?", sender: 'me', time: "10:03 AM" }
    ]);

    // State for the current input text
    const [inputValue, setInputValue] = useState("");

    // Ref for auto-scrolling to bottom
    const messagesEndRef = useRef(null);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    // Function to handle sending a message
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return; // Don't send empty messages

        const newMessage = {
            id: Date.now(), // Simple unique ID
            text: inputValue,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputValue(""); // Clear input field
    };

    if (!isOpen) return null;

    return (
        <div className="absolute top-4 right-4 bottom-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col z-20 animate-slideInRight">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Chat</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <FiX className="w-5 h-5" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.sender === 'me'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-gray-200 text-gray-800 rounded-tl-none'
                                }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                        </div>
                        <span className={`text-xs text-gray-400 mt-1 ${msg.sender === 'me' ? 'mr-1' : 'ml-1'}`}>
                            {msg.time}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
                <form className="flex items-center gap-2" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!inputValue.trim()}
                    >
                        <FiSend className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatSidebar;