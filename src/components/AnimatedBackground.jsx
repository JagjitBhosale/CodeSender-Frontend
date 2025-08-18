const AnimatedBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-40 right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-32 left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    
    {/* Floating dots */}
    <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
    <div className="absolute top-32 right-16 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700"></div>
    <div className="absolute bottom-40 left-24 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
    <div className="absolute bottom-16 right-40 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1500"></div>
  </div>
);

export default AnimatedBackground;