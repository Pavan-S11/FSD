import { useState, useEffect } from 'react'; 
import './App.css'; 
  
function App() { 
  const [permission, setPermission] = useState(Notification.permission); 
  const [deferredPrompt, setDeferredPrompt] = useState(null); 
  
  // Capture the install prompt event 
  useEffect(() => { 
    window.addEventListener('beforeinstallprompt', (e) => { 
      // Prevent Chrome 67 and earlier from automatically showing the prompt 
      e.preventDefault(); 
      // Stash the event so it can be triggered later. 
      setDeferredPrompt(e); 
    }); 
  }, []); 
 
 
  
  const handleInstallClick = async () => { 
    if (deferredPrompt) { 
      deferredPrompt.prompt(); // Show the browser's install prompt 
      const { outcome } = await deferredPrompt.userChoice; 
      if (outcome === 'accepted') { 
        console.log('User installed the PWA'); 
      } 
      setDeferredPrompt(null); // We can only use the prompt once 
    } 
  }; 
  
  const requestNotificationPermission = async () => { 
    if (!('Notification' in window)) { 
      alert("This browser does not support notifications."); 
      return; 
    } 
    const status = await Notification.requestPermission(); 
    setPermission(status); 
  }; 
  
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
      <h1>PWA Deal Alerts</h1>
      <p>Get instant flash deal alerts and install the app for the best experience.</p>

      {deferredPrompt && (
        <div style={{ padding: '15px', background: '#e0f7fa', borderRadius: '8px', marginBottom: '20px' }}>
          <p>Install the app to receive alerts directly on your device.</p>
          <button
            onClick={handleInstallClick}
            style={{ padding: '10px', background: '#00838f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Install App
          </button>
        </div>
      )}

      <button
        onClick={requestNotificationPermission}
        style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}
      >
        Enable Background Alerts
      </button>

      <div style={{ padding: '15px', background: '#f4f4f4', borderRadius: '8px', marginBottom: '20px' }}>
        <p><strong>Push Permission Status:</strong> {permission}</p>
      </div>
    </div>
  )
}

export default App; 