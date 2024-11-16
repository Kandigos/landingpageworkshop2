import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB78LhzI2_AdmYzST4H0_NCe4Wtr_fnzjU",
  authDomain: "landingworkshops.firebaseapp.com",
  projectId: "landingworkshops",
  storageBucket: "landingworkshops.firebasestorage.app",
  messagingSenderId: "796724839313",
  appId: "1:796724839313:web:d11c687b146e1b26da1030"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);