import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXJBTUuml7gXhMVz7bxJfhgLqjpjL7xkQ",
    authDomain: "disney-vn-clone.firebaseapp.com",
    projectId: "disney-vn-clone",
    storageBucket: "disney-vn-clone.appspot.com",
    messagingSenderId: "201553109098",
    appId: "1:201553109098:web:69053025aa9d1f35aaaa13",
    measurementId: "G-HMKVGDPDWY"
};

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const storage = getStorage(app);

export {auth , provider , storage};
export default db