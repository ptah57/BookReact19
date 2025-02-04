// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYlBzBxOjVzY288wOV5L_BB8u3PBMT3ww",
  authDomain: "todos-788df.firebaseapp.com",
  projectId: "todos-788df",
  storageBucket: "todos-788df.firebasestorage.app",
  messagingSenderId: "446786629403",
  appId: "1:446786629403:web:fd295ec71a941824e52dbe",
  databaseURL: "https://todos-788df-default-rtdb.europe-west1.firebasedatabase.app/"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
