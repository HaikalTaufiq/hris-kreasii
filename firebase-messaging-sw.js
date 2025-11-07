importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


// Disable default notification handling
self.addEventListener('push', (event) => {
  // Supaya FCM tidak munculkan notifikasi default otomatis
  if (event.data) {
    event.waitUntil((async () => {
      const payload = event.data.json();
      if (payload.data) {
        const title = payload.data.title;
        const options = {
          body: payload.data.body,
          icon: '/icons/icon-192x192.png',
        };
        await self.registration.showNotification(title, options);
      }
    })());
  }
});

firebase.initializeApp({
  apiKey: 'AIzaSyBqAPiJumkrbUNluLDVWCYELAlNvEhRc2I',
  appId: '1:853136954941:web:a1c24c7b4360971ecbbc54',
  messagingSenderId: '853136954941',
  projectId: 'fcm-hris-5763a',
  authDomain: 'fcm-hris-5763a.firebaseapp.com',
  storageBucket: 'fcm-hris-5763a.firebasestorage.app',
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/icons/icon-192x192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received.');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});