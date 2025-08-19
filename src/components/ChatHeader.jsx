// const ChatHeader = ({ currentRoom, onLeaveRoom }) => (
//   <div className="p-6 border-b border-white/10">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-3">
//         <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//         <h2 className="text-xl font-semibold text-white">Room: {currentRoom}</h2>
//       </div>
//       <button
//         onClick={onLeaveRoom}
//         className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all duration-300"
//       >
//         Leave
//       </button>
//     </div>
//   </div>
// );

// export default ChatHeader;


const ChatHeader = ({ currentRoom, onLeaveRoom, userCount = 1 }) => (
  <div className="p-6 border-b border-white/10">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div>
          <h2 className="text-xl font-semibold text-white">Room: {currentRoom}</h2>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-white/70">
              {userCount} {userCount === 1 ? 'user' : 'users'} online
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={onLeaveRoom}
        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all duration-300"
      >
        Leave
      </button>
    </div>
  </div>
);

export default ChatHeader;