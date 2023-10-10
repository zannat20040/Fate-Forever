// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey ,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId:  import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket ,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId ,
//   appId: import.meta.env.VITE_appId 
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyB76KNf7S7Yls1rUyv00x7Gr-JQC4ijGDo",
//   authDomain: "fateforever-4c243.firebaseapp.com",
//   projectId: "fateforever-4c243",
//   storageBucket: "fateforever-4c243.appspot.com",
//   messagingSenderId: "660822721121",
//   appId: "1:660822721121:web:7700190a5639f763586020"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC4VqDsUzRm2OvBPvgHmwHHZkiutuiba0Q",
  authDomain: "fateforver-ea405.firebaseapp.com",
  projectId: "fateforver-ea405",
  storageBucket: "fateforver-ea405.appspot.com",
  messagingSenderId: "621209212156",
  appId: "1:621209212156:web:7aa3df7f8d7e4733e8b379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth