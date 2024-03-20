import { initializeApp } from 'firebase/app';
export const firebaseConfig = {
  apiKey: "AIzaSyC7kJEoJOLgrVCjL3eN1Sn-zRvmDbjptcM",
  authDomain: "smart-water-tank-dec.firebaseapp.com",
  databaseURL: "https://smart-water-tank-dec-default-rtdb.firebaseio.com",
  projectId: "smart-water-tank-dec",
  storageBucket: "smart-water-tank-dec.appspot.com",
  messagingSenderId: "906264079805",
  appId: "1:906264079805:web:e6a0fd1bf32ef1167536d4",
  measurementId: "G-80G9R2FV4Q"
}
const app = initializeApp(firebaseConfig);

export default app;