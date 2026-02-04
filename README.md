# 📿 Ziqir - Islamic Prayer Counter

A lightweight, offline-capable Progressive Web App (PWA) for counting Islamic prayers (Zikir). Track your daily devotion with an intuitive counter and daily history log.

## Features

✨ **Offline First** - Works completely offline with service worker support  
📱 **Installable** - Install as a native app on your phone or desktop  
📊 **Daily History** - Track your prayer counts throughout the day  
⚡ **Fast & Lightweight** - Minimal dependencies, lightning-fast performance  
🎯 **Flexible Counting** - Count by +1, +2, +5, or +10 increments  
🔄 **Persistent Data** - Your history is saved locally and persists across sessions  
🎨 **Beautiful UI** - Clean, modern design optimized for all screen sizes  

## Live Demo

Visit the app: [https://rastthack.github.io/ziqir/](https://rastthack.github.io/ziqir/)

Visit the app: [https://ziqir.netlify.app/]

**Browser Support:**
- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS 16.4+)
- ✅ Firefox (Desktop)

## Usage

1. **Select Increment** - Choose how many to count: +1, +2, +5, or +10
2. **Increase Counter** - Click the plus button or press the increase button
3. **Decrease Counter** - Click the minus button if you made a mistake
4. **Reset** - Click "Reset" to start over
5. **View History** - Daily history is automatically tracked and displayed

## Project Structure

```
ziqir/
├── index.html           # Main HTML structure
├── app.js              # Core application logic
├── style.css           # Styling
├── manifest.json       # PWA manifest (for installation)
├── service-worker.js   # Offline support
├── icons/              # App icons (192x192, 512x512)
└── README.md           # This file
```

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with custom properties
- **Vanilla JavaScript** - No dependencies
- **Service Workers** - Offline functionality
- **Web App Manifest** - Installation support

## Features Explained

### Progressive Web App (PWA)
- Installable on home screen like a native app
- Works offline using service workers
- Fast load times with caching strategies

### Local Storage
- Prayer counts are saved in browser's localStorage
- Persists across browser sessions and device restarts
- No account needed, no data sent to servers

### Service Worker
- Enables offline functionality
- Caches assets for faster loading
- Automatic updates when you refresh

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 51+     | ✅ Full |
| Edge    | 15+     | ✅ Full |
| Safari  | 16.4+   | ✅ Full |
| Firefox | 44+     | ✅ Full |

## Deployment

### GitHub Pages (Already Configured)

The app is automatically deployed to GitHub Pages. Any push to the `main` branch updates the live version at:
```
https://rastthack.github.io/ziqir/
```

## Privacy

✅ No tracking  
✅ No data collection  
✅ No external API calls  
✅ All data stored locally on your device  

## License

This project is open source. Feel free to fork, modify, and use it.


**Made with ❤️ for daily devotion and mindful prayer tracking**
