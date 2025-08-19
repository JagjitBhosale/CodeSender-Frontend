import React from 'react';

const LiveUserCount = ({ userCount }) => {
  return (
    <div className="flex items-center space-x-2 text-white/70 text-sm">
      {/* Animated dot indicator */}
      <div className="relative flex items-center">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>
      
      {/* User count text */}
      <span className="font-medium">
        {userCount} {userCount === 1 ? 'user' : 'users'} online
      </span>
    </div>
  );
};

export default LiveUserCount;