import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUU7msuJCkikmbZ6DeJmIRAr3U3yLEbvs",
  authDomain: "rk2-proj.firebaseapp.com",
  projectId: "rk2-proj",
  storageBucket: "rk2-proj.appspot.com",
  messagingSenderId: "84857733166",
  appId: "1:84857733166:web:6cfbc2c90e2a31233e1fbf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);