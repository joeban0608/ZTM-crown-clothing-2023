import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMQHGU0jrfXjnEoItmRq8St79FWwly0hI",
  authDomain: "ztm-crown-clothing-db-c72d8.firebaseapp.com",
  projectId: "ztm-crown-clothing-db-c72d8",
  storageBucket: "ztm-crown-clothing-db-c72d8.appspot.com",
  messagingSenderId: "787964219249",
  appId: "1:787964219249:web:d54904326110571068f0d0",
};

// initial firebase
const crownClothingFbApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

export const crownClothingDb = getFirestore();

/* categories */
// 一次性加入一批資料進 DataBase
export const addCollectionAndDoc = async (collectionName, objectToAdd) => {
  const collectionRef = collection(crownClothingDb, collectionName);
  const batch = writeBatch(crownClothingDb);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("addCollectionAndDoc to firebase done");
};


/* user */
// createUserDocFromAuth 內有判斷如果沒有 user 創 user 如果有就 return userDocRef
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(crownClothingDb, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // console.log("userSnapshot", userSnapshot.exists()); // true or false

  // if userData not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createTime = new Date();
    const IsoStringTime = createTime.toISOString();

    // additionalInfo, ex: displayName: 'mike'
    try {
      // create user to firebase
      await setDoc(userDocRef, {
        displayName,
        email,
        IsoStringTime,
        ...additionalInfo,
      });
    } catch (e) {
      console.log("error to create user:", e);
    }
  }
  // if useData exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
