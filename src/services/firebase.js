import { initializeApp } from "firebase/app";
import {
    connectAuthEmulator,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { getFunctions } from "firebase/functions";
import config from "./firebase-web-config.json";

const firebaseApp = initializeApp(config);
const functions = getFunctions(firebaseApp, "europe-west1");

const provider = new GoogleAuthProvider();

const auth = getAuth();
auth.useDeviceLanguage(auth);
connectAuthEmulator(auth, "http://localhost:9099");

async function signIn() {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        return result.user;
    } catch (err) {
        // TODO: Handle error
        console.log(err);
    }
}

/**
 * @returns null if not signed in
 */
async function getUser() {
    return auth.currentUser;
}

export { functions, signIn, getUser };
