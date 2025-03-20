// Firebase Configuration for your new project
const firebaseConfig = {
  apiKey: "AIzaSyBYoOINI0C6KET-BsLSH-7k4-w_DwdcqPk",
  authDomain: "colour-base.firebaseapp.com",
  projectId: "colour-base",
  storageBucket: "colour-base.firebasestorage.app",
  messagingSenderId: "960380857330",
  appId: "1:960380857330:web:4e7ba2c24fcfa443d7196b",
  measurementId: "G-4G1WCRVSDG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Set up the live color collage display
const collageDiv = document.getElementById("collage");

// Listen for real-time updates to the 'colors' collection
db.collection("colors").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      const colorData = change.doc.data();
      const newColorSquare = document.createElement("div");
      newColorSquare.style.width = "50px";  // Adjust size
      newColorSquare.style.height = "50px";  // Adjust size
      newColorSquare.style.backgroundColor = `rgb(${colorData.r}, ${colorData.g}, ${colorData.b})`;
      collageDiv.appendChild(newColorSquare);
    }
  });
});

