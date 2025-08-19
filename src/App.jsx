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
<<<<<<< HEAD

=======
  
>>>>>>> d1b2d8187528d4ec91a87c9c5c9babb1a1b23318
  const [currentRoom, setCurrentRoom] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fullscreenMessage, setFullscreenMessage] = useState(null);

  // Receive messages
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
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

  // Save to local storage on join
  useEffect(() => {
    if (isJoined) {
      localStorage.setItem("roomId", currentRoom);
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [isJoined, currentRoom, messages]);

  // Load from local storage on mount
  useEffect(() => {
    const savedRoom = localStorage.getItem("roomId");
    const savedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    if (savedRoom) {
      setCurrentRoom(savedRoom);
      setIsJoined(true);
      setMessages(savedMessages);
      socket.emit("joinRoom", { roomId: savedRoom, username: "You" });
    }
  }, []);

  const extractFileOrFunctionName = (code) => {
    const fn = code.match(/(?:function|def|const|let|var)\s+([a-zA-Z0-9_$]+)/);
    if (fn) return fn[1];
    const cls = code.match(/class\s+([a-zA-Z0-9_$]+)/);
    if (cls) return cls[1];
    return "CodeSnippet";
  };

  const joinRoom = () => {
    if (roomCode.trim()) {
      const room = roomCode.trim();
      setCurrentRoom(room);
      setIsJoined(true);
      setMessages([]);
      socket.emit("joinRoom", { roomId: room, username: "You" });
    }
  };

  const sendCode = () => {
    if (!codeInput.trim()) return;
    const language = detectLanguage(codeInput);
    const newMsg = {
      id: Date.now(),
      fileName: extractFileOrFunctionName(codeInput),
      code: codeInput,
      language,
      timestamp: new Date().toLocaleTimeString(),
      sender: "You",
    };
    setMessages((p) => [...p, newMsg]);
    socket.emit("sendMessage", { roomId: currentRoom, code: codeInput, language });
    setCodeInput("");
  };

  const copyCode = (c) => {
    navigator.clipboard.writeText(c);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const leaveRoom = () => {
    setIsJoined(false);
    setCurrentRoom("");
    setRoomCode("");
    setMessages([]);
    localStorage.removeItem("roomId");
    localStorage.removeItem("messages");
  };

  const closeFullscreen = () => setFullscreenMessage(null);

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
              {/* Chat and history area */}
              <div className="lg:col-span-3">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl h-full flex flex-col shadow-2xl">
                  <ChatHeader currentRoom={currentRoom} onLeaveRoom={leaveRoom} />

                  {/* Chat scroll area, with extra padding on small screens */}
                  <div className="flex flex-col flex-1 overflow-y-auto pb-[180px] lg:pb-0">
                    <ChatMessages
                      messages={messages}
                      onCopy={copyCode}
                      copied={copied}
                      onViewFullscreen={setFullscreenMessage}
                    />
                  </div>
                </div>
              </div>

              {/* Code input: fixed on mobile, static on desktop */}
              <div className="lg:col-span-1 lg:relative fixed bottom-0 left-0 right-0 lg:static">
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

      <FullscreenCodeViewer message={fullscreenMessage} onClose={closeFullscreen} />
    </div>
  );
};

export default App;
