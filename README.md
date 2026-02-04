# 📿 Ziqir - Islamic Prayer Counter PWA

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

## Installation

### For Users

1. Visit [https://rastthack.github.io/ziqir/](https://rastthack.github.io/ziqir/)
2. Look for the **"Install"** button in your browser address bar
3. Click **"Install"** to add Ziqir to your home screen
4. Use it like a native app, even offline!

**Browser Support:**
- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS 16.4+)
- ✅ Firefox (Desktop)

### For Developers

```bash
# Clone the repository
git clone https://github.com/rastthack/ziqir.git
cd ziqir

# Serve locally (using any local server)
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js with http-server
npx http-server

# Option 3: Node.js with Live Server
npx live-server
```

Then open `http://localhost:8000` in your browser.

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

### Deploy to Other Hosting

1. **Vercel** - Connect your GitHub repo, it auto-deploys
2. **Netlify** - Drag & drop the folder or connect GitHub
3. **Firebase** - Use Firebase CLI for quick deployment

## Customization

### Change App Name
Edit `manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "Short Name"
}
```

### Change Colors
Edit `manifest.json` and `style.css`:
```json
{
  "background_color": "#your-color",
  "theme_color": "#your-color"
}
```

### Add Icons
Replace icons in the `icons/` folder:
- `icon-192.png` - 192x192 pixels
- `icon-512.png` - 512x512 pixels

## Performance Metrics

- ⚡ **First Load**: < 1 second
- 📦 **Bundle Size**: < 50 KB (uncompressed)
- 🔋 **Offline**: 100% functional
- 🎯 **Lighthouse Score**: 95+

## Privacy

✅ No tracking  
✅ No data collection  
✅ No external API calls  
✅ All data stored locally on your device  

## License

This project is open source. Feel free to fork, modify, and use it.

## Support & Feedback

Found a bug or have a feature request? Open an issue on [GitHub](https://github.com/rastthack/ziqir/issues).

---

**Made with ❤️ for daily devotion and mindful prayer tracking**
