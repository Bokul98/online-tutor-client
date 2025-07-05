// Firebase Core Import
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiqlRIJpfsKdPOxWXEKr3BSFpWVKcp81E",
  authDomain: "online-tutor-booking-pla-3aaed.firebaseapp.com",
  projectId: "online-tutor-booking-pla-3aaed",
  storageBucket: "online-tutor-booking-pla-3aaed.appspot.com",
  messagingSenderId: "280198686341",
  appId: "1:280198686341:web:77e685148a939991edabec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export default app;
