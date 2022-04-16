import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDo0KkMkGpmwIY02WCpKGg0iWQzv0N_mDY",
  authDomain: "photographer-alex.firebaseapp.com",
  projectId: "photographer-alex",
  storageBucket: "photographer-alex.appspot.com",
  messagingSenderId: "249607924245",
  appId: "1:249607924245:web:79e4723b05308cd102fc1c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;