// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1LSfH5MfXiBH_yX3-s9vguPGBrvOjNqU",
  authDomain: "reactmos.firebaseapp.com",
  projectId: "reactmos",
  storageBucket: "reactmos.appspot.com",
  messagingSenderId: "397121600745",
  appId: "1:397121600745:web:4e26cfef4526a19a7d4478",
  measurementId: "G-MGRC8BZ14E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth


