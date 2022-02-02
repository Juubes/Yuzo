import React, { useEffect } from "react";
import { useGlobalState } from "src/contexts/StateProvider";
import Post from "./Post";

function MaximizedPost() {
    const { maximizedPost, setMaximizedPost } = useGlobalState();
    const { postId, imageUrl, title } = maximizedPost;

    // Add event listeners for close
    useEffect(() => {
        const listener = (event) => {
            if (event.code == "Escape") {
                setMaximizedPost(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => window.removeEventListener("keydown", listener);
    }, [setMaximizedPost]);

    return (
        <div
            className="fixed inset-0 bg-gray-500"
            onClick={() => {
                setMaximizedPost(null);
            }}
        >
            <Post postId={postId} imageUrl={imageUrl} title={title} />
        </div>
    );
}
export default MaximizedPost;
