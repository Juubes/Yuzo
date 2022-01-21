// https://firebase.google.com/docs/functions/typescript

import createPost from "./post/post";
import createUser from "./post/create-user";
import getFeed from "./get/feed";

const allFunctions = { createPost, createUser, getFeed };

export default allFunctions;
