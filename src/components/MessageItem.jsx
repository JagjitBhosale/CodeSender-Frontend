import { FileCode, Maximize2, Copy, Check } from 'lucide-react';
import SyntaxHighlightedCode from './SyntaxHighlightedCode';

const MessageItem = ({ message, onCopy, copied, onViewFullscreen }) => (
  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <FileCode className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="text-purple-300 font-medium">{message.fileName}</p>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg font-mono">
              {message.language}
            </span>
          </div>
          <p className="text-xs text-gray-400">{message.sender} • {message.timestamp}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onViewFullscreen(message)}
          className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          title="View Fullscreen"
        >
          <Maximize2 className="w-4 h-4 text-gray-400" />
        </button>
        <button
          onClick={() => onCopy(message.code)}
          className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          title="Copy Code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
        </button>
      </div>
    </div>
    <div className="max-h-60 overflow-y-auto overflow-x-auto">
      <SyntaxHighlightedCode code={message.code} language={message.language} />
    </div>
  </div>
);

export default MessageItem;