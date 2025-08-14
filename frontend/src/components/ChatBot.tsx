import React, { useState, useEffect, useRef } from 'react';
import { API_BASE_URL } from '../config';

interface ChatbotProps {
  onClose: () => void;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [jobDescription, setJobDescription] = useState('');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendQuestion = async () => {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: question }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription, question }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.statusText}`);

      const data = await res.json();
      setMessages((prev) => [...prev, { from: 'bot', text: data.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Error: Please try again later.' }]);
    } finally {
      setLoading(false);
      setQuestion('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg max-h-[80vh] flex flex-col">
        
      {/* Header */}
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">AI Job Chatbot</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 font-bold text-2xl leading-none"
            aria-label="Close chatbot"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          Want to see if Im the right fit?
          Paste a job description and ask the AI how I match the role. 
          You can also ask about my experience, skills, and personal life 
          to get a complete picture.
        </p>
      </div>

        {/* Job Description Input */}
        <textarea
          placeholder="Paste job description or link to job posting"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={4}
          className="border rounded p-2 mb-4 w-full resize-none"
        />

        {/* Chat Messages */}
        <div
          className="flex-1 overflow-y-auto border rounded p-2 mb-4"
          style={{ minHeight: '200px' }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 ${msg.from === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}`}
            >
              <strong>{msg.from === 'user' ? 'You:' : 'AI:'}</strong> {msg.text}
            </div>
          ))}
          {loading && <div className="italic text-gray-500">AI is thinking...</div>}
          <div ref={messagesEndRef} />
        </div>

        {/* Question Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendQuestion()}
            className="flex-1 border rounded p-2"
            disabled={loading}
          />
          <button
            onClick={sendQuestion}
            disabled={loading || !question.trim()}
            className="bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
