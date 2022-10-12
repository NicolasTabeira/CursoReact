import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyApRtUzn2T6t2h2h0BpAwrc8zuylHS3WQg",
  authDomain: "souls-store.firebaseapp.com",
  projectId: "souls-store",
  storageBucket: "souls-store.appspot.com",
  messagingSenderId: "692586968455",
  appId: "1:692586968455:web:b633a477e0ad3a2fa0cf22"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)