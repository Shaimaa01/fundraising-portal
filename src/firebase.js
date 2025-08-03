import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP-GNruCyiBGVcO2hS8JsnabMA5QXnzng",
  authDomain: "fundraising-portal-facad.firebaseapp.com",
  projectId: "fundraising-portal-facad",
  storageBucket: "fundraising-portal-facad.appspot.com",
  messagingSenderId: "372612952130",
  appId: "1:372612952130:web:7b3a9437ff4f44a1143ddb",
  measurementId: "G-178Y7VP23R",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
