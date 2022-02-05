import React, { useEffect } from "react";
import { useGlobalState } from "src/contexts/GlobalStateProvider";
import Post from "./Post";

function MaximizedPost() {
    const { maximizedPost, setMaximizedPost } = useGlobalState();
    const { imageWidth, imageHeight, postId, imageUrl, imageTitle, comments } =
        maximizedPost;

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
            <div className="m-5">
                <Post
                    postId={postId}
                    imageUrl={imageUrl}
                    imageTitle={imageTitle}
                    comments={comments}
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                />
            </div>
        </div>
    );
}
export default MaximizedPost;
