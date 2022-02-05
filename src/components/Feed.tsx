import { functions } from "@services/firebase";
import { httpsCallable } from "firebase/functions";
import { useEffect, useState } from "react";
import { useGlobalState } from "src/contexts/GlobalStateProvider";
import MaximizedPost from "./post/MaximizedPost";
import Post from "./post/Post";

function Feed({ visible }) {
    const { maximizedPost, setMaximizedPost } = useGlobalState();

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(false);

    // Load posts
    useEffect(() => {
        (async function () {
            try {
                const result = await httpsCallable(functions, "getFeed")();
                setPosts(result.data);
            } catch (ex) {
                setError(true);
                console.log(ex);
            }
        })();
    }, []);

    if (!visible) return <></>;

    if (error)
        return (
            <div className="text-center text-red-700">
                {"Couldn't load the feed. Try again later."}
            </div>
        );

    if (!posts) return <div className="text-center">Loading feed...</div>;

    return (
        <>
            {posts.map((post) => (
                <Post
                    key={post.postId}
                    {...post}
                    onClick={() => {
                        setMaximizedPost(post);
                    }}
                />
            ))}

            {maximizedPost && <MaximizedPost />}
        </>
    );
}
export default Feed;
