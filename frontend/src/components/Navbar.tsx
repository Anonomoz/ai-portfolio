import { Link } from 'react-router-dom';
import { useState } from 'react';
import Chatbot from './ChatBot'; // Sørg for at have denne fil (se nedenfor)

export default function Navbar() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                Projects
              </Link>
              <Link
                to="/aboutme"
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
              >
                About Me
              </Link>
            </div>
            <button
              onClick={() => setShowChatbot(true)}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="Open AI Chatbot"
            >
              🤖 Chatbot
            </button>
          </div>
        </div>
      </nav>

      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  );
}
