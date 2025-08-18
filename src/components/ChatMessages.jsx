import { useRef, useEffect } from 'react';
import { Code } from 'lucide-react';
import MessageItem from './MessageItem';

const ChatMessages = ({ messages, onCopy, copied, onViewFullscreen }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(80vh-120px)]">
      {messages.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No code shared yet. Be the first to send some code!</p>
        </div>
      ) : (
        messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            onCopy={onCopy}
            copied={copied}
            onViewFullscreen={onViewFullscreen}
          />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;