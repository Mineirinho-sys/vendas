import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5elgwKEWsrtpwVhqaKV60uc9lh0IAXlA",
  authDomain: "lhzloja.firebaseapp.com",
  projectId: "lhzloja",
  storageBucket: "lhzloja.firebasestorage.app",
  messagingSenderId: "389251681553",
  appId: "1:389251681553:web:2cef027bf53b3e6ea490b0",
  measurementId: "G-GPFZWLHE4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//provedor google
const googleProvider = new GoogleAuthProvider();

//funcao login popup
async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
}

//funcao para logount
async function logout() {
  await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };
