import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImagePlus, Send } from "lucide-react"

type Message = {
  content: string;
  sender: 'user' | 'gpt';
  fullContent?: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const starterMessage: Message = {
    content: "",
    fullContent: "Sure, here's an implementation of a custom React hook called useLocalStorage that allows you to save and retrieve data from local storage in your React components:",
    sender: 'gpt'
  }

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newUserMessage: Message = { content: inputMessage, sender: 'user' }
      setMessages(prev => [...prev, newUserMessage])
      setInputMessage('')
      setShowSuggestions(false)
      
      if (messages.length === 0) {
        setIsTyping(true)
        setTimeout(() => {
          setMessages(prev => [...prev, starterMessage])
          setIsTyping(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    const animateText = async () => {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.sender === 'gpt' && lastMessage.fullContent) {
        const fullContent = lastMessage.fullContent;
        for (let i = 0; i <= fullContent.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 20)); // Adjust speed here
          setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            const lastIndex = updatedMessages.length - 1;
            updatedMessages[lastIndex] = {
              ...updatedMessages[lastIndex],
              content: fullContent.slice(0, i)
            };
            return updatedMessages;
          });
        }
      }
    };

    animateText();
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow flex flex-col p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 bg-gray-100 rounded-lg p-4 ${message.sender === 'user' ? 'ml-auto' : ''}`}>
            <div className={`flex items-center mb-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
              {message.sender === 'gpt' && (
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mr-2"></div>
              )}
              <span className="font-semibold">{message.sender === 'gpt' ? 'GPT-4' : 'User'}</span>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-500 rounded-full ml-2"></div>
              )}
            </div>
            <p className={message.sender === 'user' ? 'text-right' : ''}>{message.content}</p>
            {message.sender === 'gpt' && index === 1 && message.content === message.fullContent && (
              <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mt-2">
                <code>{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get the initial value from Local Storage or use the default value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update Local Storage whenever the value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`}</code>
              </pre>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="w-full p-4 bg-white">
        {showSuggestions && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <Button
                key={i}
                variant="secondary"
                className="flex flex-col items-center p-3 h-auto"
              >
                <span className="font-semibold">Design a database schema</span>
                <span className="text-xs text-gray-500">for an online merch store</span>
              </Button>
            ))}
          </div>
        )}
        <div className="relative glowing-edge-container">
          <Input
            type="text"
            placeholder="Ask a question"
            className="w-full pl-4 pr-24 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-purple-300 transition-shadow duration-200 bg-white"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Upload image"
            >
              <ImagePlus className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Send message"
              onClick={sendMessage}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <style jsx>{`
          @keyframes moveGradient {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 200% 0%;
            }
          }
          .glowing-edge-container {
            position: relative;
            isolation: isolate;
          }
          .glowing-edge-container::before {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 9999px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(168, 85, 247, 0.3) 25%,
              rgba(168, 85, 247, 0.3) 75%,
              transparent
            );
            background-size: 200% 100%;
            animation: moveGradient 3s linear infinite;
            z-index: -1;
          }
          .glowing-edge-container::after {
            content: '';
            position: absolute;
            inset: 0;
            background: white;
            border-radius: 9999px;
            z-index: -1;
          }
          .typing-indicator {
            display: flex;
            align-items: center;
          }
          .typing-indicator span {
            height: 8px;
            width: 8px;
            background-color: #9ca3af;
            border-radius: 50%;
            display: inline-block;
            margin-right: 4px;
            animation: bounce 1.4s infinite ease-in-out;
          }
          .typing-indicator span:nth-child(1) {
            animation-delay: -0.32s;
          }
          .typing-indicator span:nth-child(2) {
            animation-delay: -0.16s;
          }
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  )
}