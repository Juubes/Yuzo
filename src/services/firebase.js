import { initializeApp } from "firebase/app";
import {
    connectAuthEmulator,
    getAuth,
    GoogleAuthProvider
} from "firebase/auth";
import { getFunctions } from "firebase/functions";
import config from "./firebase-web-config.json";

const firebaseApp = initializeApp(config);
const functions = getFunctions(firebaseApp, "europe-west1");

const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.useDeviceLanguage(auth);
connectAuthEmulator(auth, "http://localhost:9099");

export { functions, auth, provider };
