'use client';

import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Open Chatbot"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl leading-none"
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-4 text-gray-700 text-sm">
            👋 Hi there! How can we assist you today?  
            <br />
            <span className="text-xs text-gray-500">
              (Chat support will be available soon.)
            </span>
          </div>

          {/* Input area (disabled for now) */}
          <div className="px-4 py-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
