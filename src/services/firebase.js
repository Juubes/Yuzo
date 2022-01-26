import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

import config from "./firebase-web-config.json";

const firebaseApp = initializeApp(config);
const functions = getFunctions(firebaseApp, "europe-west1");

export { functions };
