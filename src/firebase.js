import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOZ4sWPs7urMTVmCWDdlhrqD-y96vtIp4",
  authDomain: "task6-46085.firebaseapp.com",
  databaseURL: "https://task6-46085-default-rtdb.firebaseio.com",
  projectId: "task6-46085",
  storageBucket: "task6-46085.appspot.com",
  messagingSenderId: "1093434309103",
  appId: "1:1093434309103:web:ecbe512f17e740c2301e1a",
  measurementId: "G-Y63QRKG5X3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);