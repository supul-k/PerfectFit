import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth,} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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
const storage = getStorage(app);

const database = getDatabase(app);
const auth = getAuth();
  window.onload = function() {
      console.log("logged ");
      auth.onAuthStateChanged((user) => {
          console.log("logged In");
          if (!user) {
          // User is not authenticated, redirect to the login page or any other desired page
          window.location.href = "/Login/login.html";
          }
      });
  }

const bannerImageUpload = document.querySelector('#banner-upload');
const uploadButton = document.querySelector('#image-upload');
const blogTitleField = document.querySelector('.title');
const blogArticleField = document.querySelector('.article');

//upload blogs collection to the firebase
bannerImageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  console.log(file);

  const storageRef = ref(storage, 'banners/' + file.name);
  uploadBytes(storageRef, file)
    .then(() => {
      // Upload successful, get the download URL
      return getDownloadURL(storageRef);
    })
    .then((downloadURL) => {
      // Update the banner image in the HTML
      const bannerImage = document.querySelector('.banner');
      bannerImage.style.backgroundImage = `url(${downloadURL})`;
    })
    .catch((error) => {
      console.error('Error uploading banner image:', error);
    });
});


const publishButton = document.querySelector('.publish-btn');
publishButton.addEventListener('click', async () => {
  const blogTitle = blogTitleField.value;
  const blogArticle = blogArticleField.value;

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
