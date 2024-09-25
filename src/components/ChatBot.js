import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: "Greetings, space explorer! This is a simulated response from your AI Copilot. In the future, I'll be powered by advanced AI to assist you on your cosmic journey through data science and technology!", sender: 'bot' }]);
    }, 1000);
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
                  {message.text}
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