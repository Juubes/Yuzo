import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import storage, { ref } from "firebase/storage";

import config from "./firebase-web-config.json";

const firebaseApp = initializeApp(config);
const storageRef = ref(storage.getStorage(firebaseApp));

export { storage, storageRef };
