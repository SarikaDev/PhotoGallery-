import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const app = firebase.initializeApp({
    apiKey:"AIzaSyC3KoB_3Qz8wPAegFS3BcVLIty4_zbwmwM",
    authDomain: "auth-gallery-development-9cd3f.firebaseapp.com",
    projectId:"auth-gallery-development-9cd3f",
    storageBucket:"auth-gallery-development-9cd3f.appspot.com",
    messagingSenderId:"816414156158",
    appId:"1:816414156158:web:30fa64310951c7122c3f2f" 
})

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
export default app;