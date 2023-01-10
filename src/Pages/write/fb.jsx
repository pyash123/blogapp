import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQ3JmwhqJV5RQiP9G3dPl79TbTMuDDj4",
  authDomain: "yash8aug.firebaseapp.com",
  databaseURL: "https://yash8aug-default-rtdb.firebaseio.com",
  projectId: "yash8aug",
  storageBucket: "yash8aug.appspot.com",
  messagingSenderId: "953978650784",
  appId: "1:953978650784:web:c2c186259641510220c9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
