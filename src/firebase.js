// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0d91WbDCpL3I84uqb17Mu70rSKeWRfDI",
  authDomain: "foodfyt-497df.firebaseapp.com",
  projectId: "foodfyt-497df",
  storageBucket: "foodfyt-497df.appspot.com",
  messagingSenderId: "931514292897",
  appId: "1:931514292897:web:3a5ead454edfcc27fd2ee0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage, db };
