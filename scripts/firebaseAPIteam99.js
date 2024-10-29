//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyA2enTBm5-dcQiSl5qRENbuoRb1pxT29Ys",
    authDomain: "comp1800-202330-demo-feac9.firebaseapp.com",
    projectId: "comp1800-202330-demo-feac9",
    storageBucket: "comp1800-202330-demo-feac9.appspot.com",
    messagingSenderId: "1000134745382",
    appId: "1:1000134745382:web:094ac18830ee2f701135e7"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
