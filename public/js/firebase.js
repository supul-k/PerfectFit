import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  // Your Firebase project's configuration
    apiKey: "AIzaSyAsbQQ1v4-iFojDtq_ZMnGQjD05p1NyqR4",
    authDomain: "perfect-fit-web-6435f.firebaseapp.com",
    projectId: "perfect-fit-web-6435f",
    storageBucket: "perfect-fit-web-6435f.appspot.com",
    messagingSenderId: "281776326236",
    appId: "1:281776326236:web:19a0d34eeda067c7268899",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const publishButton = document.querySelector('.publish-btn');
publishButton.addEventListener('click', async () => {
  const blogTitle = document.querySelector('.title').value;
  const blogArticle = document.querySelector('.article').value;

  const blogsCollection = collection(firestore, 'blogs');
  const blogData = {
    title: blogTitle,
    article: blogArticle,
    // Add any other blog details you want to save
  };

  try {
    const docRef = await addDoc(blogsCollection, blogData);
    console.log('Blog details saved successfully with ID:', docRef.id);
    // Redirect to a success page or perform any other desired action
  } catch (error) {
    console.error('Error saving blog details:', error);
    // Handle the error appropriately
  }
});
