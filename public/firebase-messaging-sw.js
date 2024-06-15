/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyBkwnXi6_jQQuKvm-qHbW7o42LrnRCAOy8",
  authDomain: "trade-coin-dbb18.firebaseapp.com",
  projectId: "trade-coin-dbb18",
  storageBucket: "trade-coin-dbb18.appspot.com",
  messagingSenderId: "155810449611",
  appId: "1:155810449611:web:d92c22010661dced4af34e",
  measurementId: "G-Z8QQMFNK9D",
};

if (firebase.messaging.isSupported()) {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  self.addEventListener("push", (event) => {
    const payload = event.data.json();
    const title = payload.data.title;
    const options = {
      body: payload.data.body,
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });

  messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
    };
    console.log(payload);

    self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener("notificationclick", (event) => {
    if (event.action) {
      clients.openWindow(event.action);
    }
    event.notification.close();
  });
}
