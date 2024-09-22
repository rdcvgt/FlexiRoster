// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "dotenv/config";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "flexiroster.firebaseapp.com",
	projectId: "flexiroster",
	storageBucket: "flexiroster.appspot.com",
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
