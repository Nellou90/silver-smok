import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-sTVioYjHVsg5IgDgfFfxbIquSRTZlOg",
    authDomain: "silver-smok-test.firebaseapp.com",
    projectId: "silver-smok-test",
    storageBucket: "silver-smok-test.firebasestorage.app",
    messagingSenderId: "131621234062",
    appId: "1:131621234062:web:74c339173fab38c21070df",
    measurementId: "G-4KEL5DZ70E"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);