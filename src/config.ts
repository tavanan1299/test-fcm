import { initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBkwnXi6_jQQuKvm-qHbW7o42LrnRCAOy8",
  authDomain: "trade-coin-dbb18.firebaseapp.com",
  projectId: "trade-coin-dbb18",
  storageBucket: "trade-coin-dbb18.appspot.com",
  messagingSenderId: "155810449611",
  appId: "1:155810449611:web:d92c22010661dced4af34e",
  measurementId: "G-Z8QQMFNK9D",
};
let app;
let messaging;

(async () => {
  if (await isSupported()) {
    app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
  }
})();

export { app, messaging };

export const getBrowserToken = async () => {
  if (await isSupported()) {
    const token = await getToken(getMessaging(), {
      vapidKey:
        "BGRWw4QsMuJ3mgY_ZhyQyZTgiw-KbosRgIkQsw-IV17hDGuKd-BKI3u2rklvn2Y3a3maqH_FDiehu9ZyTx247Ug",
    });
    return token;
  } else {
    return "emptyToken";
  }
};
