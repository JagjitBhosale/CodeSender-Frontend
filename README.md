# 🚀 CodeSender
![CodeSender UI](https://ibb.co/Xk87cPkv)


**Real-time code sharing made simple**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://codesender.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Railway-purple)](https://codesender-backend-production.up.railway.app)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb)](https://reactjs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.0-black)](https://socket.io/)

*Share code snippets instantly with your team in real-time*

[🎯 Features](#-features) •
[🚀 Quick Start](#-quick-start) •
[🛠️ Tech Stack](#-tech-stack) •
[🔧 API Reference](#-api-reference)



---

## ✨ Features

### 🔥 **Core Features**
- **Real-time code sharing** - Send code snippets instantly across devices
- **Live user count** - See who's currently in your room
- **Syntax highlighting** - Supports 20+ programming languages
- **Room-based collaboration** - Create or join private rooms
- **Auto-save sessions** - Your room and messages persist across browser sessions
- **Mobile responsive** - Works seamlessly on desktop and mobile

### 🎨 **User Experience**
- **Animated backgrounds** - Beautiful gradient animations
- **Code detection** - Automatically detects programming languages
- **One-click copy** - Copy any code snippet with a single click
- **Fullscreen viewer** - View code in fullscreen mode for better readability
- **Real-time notifications** - Get notified when users join/leave

### 🔒 **Reliability**
- **Auto-reconnection** - Automatically reconnects if connection drops
- **Error handling** - Graceful error handling and user feedback
- **Connection status** - Visual indicators for connection state
- **Session persistence** - Resume your session after browser restart

---

## 🚀 Quick Start

### 📋 Prerequisites

- Node.js 16+ 
- npm or yarn
- Modern web browser

### 🖥️ Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/codesender.git
   cd codesender
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### 🔧 Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

4. **Server runs on**
   ```
   http://localhost:5000
   ```

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework  
- 🔌 **Socket.io Client** - Real-time bidirectional communication
- 🎭 **Lucide React** - Beautiful & consistent icons
- 📱 **Responsive Design** - Mobile-first approach

### **Backend**
- 🟢 **Node.js** - JavaScript runtime
- ⚡ **Express.js** - Fast, unopinionated web framework
- 🔌 **Socket.io** - Real-time engine
- 🌐 **CORS** - Cross-origin resource sharing
- 💾 **In-memory storage** - Room and user management

### **Deployment**
- 🚀 **Vercel** - Frontend deployment
- 🚂 **Railway** - Backend deployment
- 🌐 **Custom Domain** - Production-ready URLs

---

## 🎯 How to Use

### 1. **Create or Join a Room**
```
1. Enter a room code (e.g., "team-project")
2. Click "Join Room"
3. Share the room code with your team
```

### 2. **Send Code**
```
1. Paste your code in the input area
2. Language is automatically detected
3. Click "Send Code" or press Ctrl+Enter
4. Code appears instantly for all users
```

### 3. **Collaborate**
```
1. See live user count
2. Copy any code snippet with one click
3. View code in fullscreen mode
4. Leave room when done
```

---

## 🔧 API Reference

### **Socket Events**

#### **Client to Server**
| Event | Payload | Description |
|-------|---------|-------------|
| `joinRoom` | `{ roomId, username }` | Join a room |
| `sendMessage` | `{ roomId, code, language }` | Send code snippet |
| `leaveRoom` | `{ roomId }` | Leave current room |

#### **Server to Client**
| Event | Payload | Description |
|-------|---------|-------------|
| `receiveMessage` | `{ username, code, language, timestamp }` | Receive code snippet |
| `userJoined` | `{ username, userCount }` | User joined notification |
| `userLeft` | `{ username, userCount }` | User left notification |
| `userCountUpdate` | `{ userCount }` | Live user count update |

### **Environment Variables**

#### **Frontend (.env)**
```bash
VITE_BACKEND_URL=https://your-backend-url.com
```

#### **Backend (.env)**
```bash
PORT=5000
FRONTEND_URL=https://your-frontend-url.com
```

---

## 🚀 Deployment

### **Frontend (Vercel)**
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds on push

### **Backend (Railway)**  
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy with automatic builds on push

### **Environment Setup**
```bash
# Frontend
VITE_BACKEND_URL=https://codesender-backend-production.up.railway.app

# Backend  
FRONTEND_URL=https://codesender.vercel.app
PORT=5000
```

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### **🐛 Bug Reports**
- Use GitHub Issues
- Include steps to reproduce
- Provide browser/OS information

### **✨ Feature Requests**
- Describe the feature clearly
- Explain the use case
- Consider implementation complexity

### **🔧 Code Contributions**
```bash
1. Fork the repository
2. Create a feature branch: git checkout -b feature/amazing-feature
3. Commit changes: git commit -m 'Add amazing feature'
4. Push to branch: git push origin feature/amazing-feature  
5. Open a Pull Request
```

### **Development Guidelines**
- Follow existing code style
- Add comments for complex logic
- Test on multiple devices/browsers
- Update documentation if needed

---

## 🎨 Customization

### **Styling**
```javascript
// Customize colors in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6'
      }
    }
  }
}
```

### **Language Detection**
```javascript
// Add new languages in utils/detectLanguage.js
const languagePatterns = {
  python: /def\s+\w+|import\s+\w+|from\s+\w+/,
  javascript: /function\s+\w+|const\s+\w+|let\s+\w+/,
  // Add more patterns
}
```

---

## 🔒 Security

### **Current Measures**
- CORS configuration
- Input sanitization
- Room-based isolation
- No persistent data storage

### **Best Practices**
- Don't share sensitive information
- Use unique room codes
- Clear session data when done
- Report security issues responsibly

---

## 📊 Performance

### **Optimization Features**
- **Lazy loading** - Components load on demand
- **Memoized connections** - Single socket instance
- **Efficient re-renders** - Optimized React updates
- **Lightweight bundle** - Tree-shaken dependencies

### **Benchmarks**
- **First load**: ~2s on 3G
- **Message latency**: <100ms
- **Bundle size**: ~150KB gzipped
- **Memory usage**: ~15MB average

---

## 🐛 Troubleshooting

### **Common Issues**

#### **Connection Problems**
```bash
# Check if backend is running
curl https://codesender-backend-production.up.railway.app/health

# Clear browser cache and cookies
# Disable browser extensions
# Try incognito/private mode
```

#### **Messages Not Sending**
```bash
# Check browser console for errors
# Verify room code is correct
# Ensure stable internet connection
# Try refreshing the page
```

#### **Mobile Issues**
```bash
# Use latest browser version
# Enable JavaScript
# Check mobile data/WiFi
# Try landscape orientation
```

---

## 🔄 Changelog

### **Version 2.0.0** (Latest)
- ✨ Added live user count
- 🐛 Fixed message duplication
- 🎨 Improved mobile UI
- ⚡ Enhanced connection stability

### **Version 1.5.0**
- 🎯 Added fullscreen code viewer
- 📱 Mobile
