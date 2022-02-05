import process from "process";
import { initializeApp } from "firebase/app";
import {
    connectAuthEmulator,
    getAuth,
    GoogleAuthProvider
} from "firebase/auth";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import config from "./firebase-web-config.json";

const firebaseApp = initializeApp(config);
const functions = getFunctions(firebaseApp, "europe-west1");

const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.useDeviceLanguage(auth);

if (process.env.NODE_ENV == "development") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFunctionsEmulator(functions, "localhost", 5001);
}

export { functions, auth, provider };
