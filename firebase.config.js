// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ETkBfoN9daEboLE_yp1gknjckZQdDpc",
  authDomain: "travel-guru-96bb6.firebaseapp.com",
  projectId: "travel-guru-96bb6",
  storageBucket: "travel-guru-96bb6.appspot.com",
  messagingSenderId: "469990631069",
  appId: "1:469990631069:web:926718f430fa0001dd1674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app