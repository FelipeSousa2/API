import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNBSWNxEPLpwMvF7CbLElLxokxQFCAuMc",
  authDomain: "projeto-autista-2dffc.firebaseapp.com",
  projectId: "projeto-autista-2dffc",
  storageBucket: "projeto-autista-2dffc.firebasestorage.app",
  messagingSenderId: "908768002579",
  appId: "1:908768002579:web:4b1153aa9606953481b5e6",
  measurementId: "G-MKRYVN4HFC",
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporte a instância de autenticação
export const auth = getAuth(app);
