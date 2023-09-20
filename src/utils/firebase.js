import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUaRtmWAl4C4la-AIUG2tYWc8p5cgnpwQ",
  authDomain: "sit313-web-app.firebaseapp.com",
  projectId: "sit313-web-app",
  storageBucket: "sit313-web-app.appspot.com",
  messagingSenderId: "23064500827",
  appId: "1:23064500827:web:f61dce8b92bdd249123d7e"
};

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
   provider.setCustomParameters ({
    prompt:"select_account"
   });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) =>{
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  const docRef = doc(collectionRef);
  batch.set(docRef, objectsToAdd)
 await batch.commit()
 console.log('Transaction is successful!')
}

export const fetchJobsAndDocuments = async () =>{
  const collectionRef = collection(db, 'jobs')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q);
   const staffMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
    const { id , ...items } = docSnapshot.data();
    acc[id] = items
    return acc;
   }, {})
   return staffMap;
}

export const createUserDocFromAuth= async (userAuth, additionalInformation ={}) =>{
  if (!userAuth) return;
  

  const userDocRef = doc (db, 'users', userAuth.uid );
 
  
  const userSnapshot = await getDoc(userDocRef);
 

  if (! userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation
    })
  }
  catch (error){
  console.log('error in creating ', error.message)
  }
}

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password)
}

const storage=getStorage();
export const uploadImage = async (file, progressCallback) => {
  try {
    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progressCallback(progress);
    });
    await uploadTask;

    console.log("upload an image finished");

    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
