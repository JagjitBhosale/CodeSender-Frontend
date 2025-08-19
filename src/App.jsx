import { useEffect, useState, useMemo } from 'react';
import { detectLanguage } from './utils/detectLanguage';
import AnimatedBackground from './components/AnimatedBackground';
import JoinRoom from './components/JoinRoom';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import CodeInput from './components/CodeInput';
import FullscreenCodeViewer from './components/FullscreenCodeViewer';
import { io } from 'socket.io-client';

const App = () => {
  const socket = useMemo(() => io("https://codesender-backend-production.up.railway.app/"), []);
  
  const [currentRoom, setCurrentRoom] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] = useState(null);
  const [userCount, setUserCount] = useState(1);


  // Receive messages from socket
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      // data: { username, message, code, language, timestamp }
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          fileName: extractFileOrFunctionName(data.code),
          code: data.code,
          language: data.language,
          timestamp: new Date(data.timestamp).toLocaleTimeString(),
          sender: data.username,
        },
      ]);
    });

    return () => socket.off("receiveMessage");
  }, [socket]);

  // Save when joining
  useEffect(() => {
    if (isJoined) {
      localStorage.setItem('roomId', currentRoom);
      localStorage.setItem('messages', JSON.stringify(messages));
    }
  }, [isJoined, currentRoom, messages]);

// Load saved room and messages on mount
  useEffect(() => {
  const savedRoom = localStorage.getItem('roomId');
  const savedMessages = JSON.parse(localStorage.getItem('messages') || '[]');

  if (savedRoom) {
    setCurrentRoom(savedRoom);
    setIsJoined(true);
    setMessages(savedMessages);
    socket.emit("joinRoom", { roomId: savedRoom, username: "You" });
  }
  }, []);



  const extractFileOrFunctionName = (code) => {
    const functionMatch = code.match(/(?:function\s+|def\s+|const\s+|let\s+|var\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)/);
    if (functionMatch) return functionMatch[1];

    const classMatch = code.match(/(?:class\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)/);
    if (classMatch) return classMatch[1];

    const componentMatch = code.match(/(?:const\s+|function\s+)([A-Z][a-zA-Z0-9_$]*)/);
    if (componentMatch) return componentMatch[1];

    const lines = code.split('\n');
    const firstLine = lines[0].trim();
    if (firstLine.includes('//') && firstLine.includes('.')) {
      const fileMatch = firstLine.match(/([a-zA-Z0-9_-]+\.[a-zA-Z0-9]+)/);
      if (fileMatch) return fileMatch[1];
    }

    return 'CodeSnippet';
  };

  const joinRoom = () => {
    if (roomCode.trim()) {
      setCurrentRoom(roomCode.trim());
      setIsJoined(true);
      setMessages([]);

      socket.emit("joinRoom", { roomId: roomCode.trim(), username: "You" });
    }
  };

  const sendCode = () => {
    if (codeInput.trim()) {
      const language = detectLanguage(codeInput);
      const fileName = extractFileOrFunctionName(codeInput);

      const newMessage = {
        id: Date.now(),
        fileName,
        code: codeInput,
        language,
        timestamp: new Date().toLocaleTimeString(),
        sender: 'You'
      };
      setMessages((prev) => [...prev, newMessage]);

      socket.emit("sendMessage", {
        roomId: currentRoom,
        message: "",
        code: codeInput,
        language,
      });

      setCodeInput('');
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const leaveRoom = () => {
    setIsJoined(false);
    setCurrentRoom('');
    setRoomCode('');
    setMessages([]);

    // CLEAR LOCAL STORAGE
    localStorage.removeItem('roomId');
    localStorage.removeItem('messages');
  };

  const viewFullscreen = (message) => {
    setFullscreenMessage(message);
  };

  const closeFullscreen = () => {
    setFullscreenMessage(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full mx-auto">
          {!isJoined ? (
            <JoinRoom
              roomCode={roomCode}
              setRoomCode={setRoomCode}
              onJoinRoom={joinRoom}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[80vh] px-2 md:px-4 lg:px-8 max-w-[1800px] mx-auto w-full">
              <div className="lg:col-span-3">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl h-full flex flex-col shadow-2xl">
                  <ChatHeader currentRoom={currentRoom} onLeaveRoom={leaveRoom} />
                  <div className="flex flex-col justify-end flex-1 overflow-y-auto pb-45">
                  <ChatMessages
                    messages={messages}
                    onCopy={copyCode}
                    copied={copied}
                    onViewFullscreen={viewFullscreen}
                  />
                </div>
                </div>
              </div>

              <div className="lg:col-span-1 fixed bottom-[-14px] left-0 right-0 lg:static">
                <CodeInput
                  codeInput={codeInput}
                  setCodeInput={setCodeInput}
                  onSendCode={sendCode}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <FullscreenCodeViewer
        message={fullscreenMessage}
        onClose={closeFullscreen}
      />
    </div>
  );
};

export default App;
