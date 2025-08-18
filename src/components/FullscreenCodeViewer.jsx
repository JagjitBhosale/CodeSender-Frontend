import { FileCode, X } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import SyntaxHighlightedCode from './SyntaxHighlightedCode';

const FullscreenCodeViewer = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm">
      <AnimatedBackground />
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileCode className="w-6 h-6 text-purple-400" />
              <div>
                <h2 className="text-xl font-semibold text-white">{message.fileName}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg font-mono">
                    {message.language}
                  </span>
                  <span className="text-xs text-gray-400">{message.sender} • {message.timestamp}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
            <SyntaxHighlightedCode code={message.code} language={message.language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenCodeViewer;