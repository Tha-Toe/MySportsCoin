// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCcfJ-DikHELVqgAB38GmwCta1uYXX4N2I",
  authDomain: "my-sports-coin.firebaseapp.com",
  projectId: "my-sports-coin",
  storageBucket: "my-sports-coin.appspot.com",
  messagingSenderId: "242981645737",
  appId: "1:242981645737:web:652f8bd27a99f25ab1e8b8",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage, db };
