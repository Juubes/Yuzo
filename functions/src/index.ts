// https://firebase.google.com/docs/functions/typescript

import post from "./post/post";
import createUser from "./post/create-user";
import getFeed from "./get/feed";

const allFunctions = { post, createUser, getFeed };

export default allFunctions;
