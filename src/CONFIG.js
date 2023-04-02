import { initializeApp } from "firebase/app";
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB4tPxU7HnHpD442PVCTvSrgQkMKjtnGFU",
  authDomain: "react-course-proje.firebaseapp.com",
  databaseURL:
    "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-course-proje",
  storageBucket: "react-course-proje.appspot.com",
  messagingSenderId: "242113916631",
  appId: "1:242113916631:web:5a9673219112ba76898a92",
  measurementId: "G-XLN5B05X9C",
};
export const FIREBASE = initializeApp(FIREBASE_CONFIG);
