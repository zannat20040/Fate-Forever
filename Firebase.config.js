// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76KNf7S7Yls1rUyv00x7Gr-JQC4ijGDo",
  authDomain: "fateforever-4c243.firebaseapp.com",
  projectId: "fateforever-4c243",
  storageBucket: "fateforever-4c243.appspot.com",
  messagingSenderId: "660822721121",
  appId: "1:660822721121:web:7700190a5639f763586020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth