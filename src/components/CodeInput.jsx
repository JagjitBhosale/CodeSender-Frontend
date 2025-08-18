import { Send } from 'lucide-react';

const CodeInput = ({ codeInput, setCodeInput, onSendCode }) => (
  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl h-full flex flex-col shadow-2xl">

    <div className="p-6 border-b border-white/10">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <Send className="w-5 h-5 mr-2 text-purple-400" />
        Send Code
      </h3>
    </div>

    <div className="flex-1 flex flex-col p-6">
      <div className="relative flex-1 mb-4">
        <textarea
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-full resize-none bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 font-mono text-sm leading-relaxed"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none"></div>
      </div>

      <button
        onClick={onSendCode}
        disabled={!codeInput.trim()}
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 shadow-lg"
      >
        <Send className="w-4 h-4 inline mr-2" />
        Send Code
      </button>
    </div>
  </div>
);

export default CodeInput;