import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcoJEk73cmKOc8f6k7CPt4wohris1cdQE",
  authDomain: "snsstudy-c685d.firebaseapp.com",
  projectId: "snsstudy-c685d",
  storageBucket: "snsstudy-c685d.appspot.com",
  messagingSenderId: "379497366220",
  appId: "1:379497366220:web:efac9a9658e71a7bc77869",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
