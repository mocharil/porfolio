import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const messagesEndRef = useRef(null);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
    setIsAnimating(false);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const formatToBold = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '**$1**');
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const formattedAnswer = formatToBold(data.answer);
      setMessages(prevMessages => [...prevMessages, { text: formattedAnswer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages(prevMessages => [...prevMessages, { text: "I'm sorry, I encountered an error while processing your request. Please try again later.", sender: 'bot' }]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000); // Toggle animation every 3 seconds

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="chatbot-container">
      <button
        onClick={toggleChatBot}
        className={`chatbot-toggle space-glow ${isAnimating ? 'animate-pulse' : ''}`}
      >
        <Image
          src="/icons/chatbot.png"
          alt="AI Copilot"
          width={60}
          height={60}
          className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        />
        {!isOpen && (
          <div className="chat-bubble">
            Hi!! You can ask me Anything
          </div>
        )}
      </button>
      {isOpen && (
        <div className="chatbot-window cosmic-bg">
          <div className="chatbot-header">
            <h3 className="text-lg font-semibold space-glow">AI Copilot Control Panel</h3>
            <button
              onClick={toggleChatBot}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Close
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="text-center text-blue-300 mt-4 space-glow">
                Welcome aboard, space traveler! How may I assist you on your cosmic journey today?
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'
                }`}
              >
                <span className="chatbot-message-content">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Transmit your message here..."
              className="chatbot-input-field"
            />
            <button
              onClick={handleSendMessage}
              className="chatbot-send-button space-glow"
            >
              Transmit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;