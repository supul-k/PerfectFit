import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCFMZiI81PLeSUfWSZJA78ppkOuLfgt8zU",
    authDomain: "perfect-fit-web.firebaseapp.com",
    projectId: "perfect-fit-web",
    storageBucket: "perfect-fit-web.appspot.com",
    messagingSenderId: "89161650010",
    appId: "1:89161650010:web:fe2058ac70b91f7e5aed63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the necessary variables if needed
export { app, db };  



