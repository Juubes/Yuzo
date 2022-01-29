import { functions } from "@services/firebase";
import { httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import MaximizedPost from "./MaximizedPost";
import Post from "./Post";

const POST_TEMPLATES = (
    <>
        <Post template />
        <Post template />
        <Post template />
        <Post template />
    </>
);

function Main(props) {
    const [posts, setPosts] = useState([]);
    const [maximizedPost, setMaximizedPost] = useState(null);

    const { settingsOpen } = props;

    useEffect(() => {
        httpsCallable(functions, "getFeed")()
            .then((data) => {
                setPosts(data.data);
            })
            .catch(
                (err) => alert(err) // TODO: better error handling
            );
    }, []);

    return (
        <main className="min-h-screen max-w-3xl">
            {!settingsOpen ? (
                <Feed
                    posts={posts}
                    maximizedPost={maximizedPost}
                    setMaximizedPost={setMaximizedPost}
                />
            ) : (
                <div>settingsOpen</div>
            )}
        </main>
    );
}

export function Feed(props) {
    const { posts, maximizedPost, setMaximizedPost } = props;

    return (
        <>
            {posts.length == 0
                ? POST_TEMPLATES
                : posts.map((post) => (
                      <Post
                          key={post.id}
                          id={post.id}
                          imageUrl={post.imageUrl}
                          imageTitle={post.imageTitle}
                          onClick={() => {
                              setMaximizedPost(post);
                          }}
                      />
                  ))}
            {maximizedPost && (
                <MaximizedPost
                    maximizedPost={maximizedPost}
                    setMaximizedPost={setMaximizedPost}
                />
            )}
        </>
    );
}

export default Main;
