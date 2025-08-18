import { Code, Users } from 'lucide-react';

const JoinRoom = ({ roomCode, setRoomCode, onJoinRoom }) => (
  <div className="text-center">
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <Code className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">Code Sender</h1>
        <p className="text-gray-300">Share code snippets in real-time with your team</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter room code..."
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onJoinRoom()}
            className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none"></div>
        </div>

        <button
          onClick={onJoinRoom}
          disabled={!roomCode.trim()}
          className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 shadow-lg"
        >
          <Users className="w-5 h-5 inline mr-2" />
          Join Room
        </button>
      </div>
    </div>
  </div>
);

export default JoinRoom;