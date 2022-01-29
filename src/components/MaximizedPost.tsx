import React, { useEffect } from "react";
import Post from "./Post";
import PostData from "./PostData";

function MaximizedPost(props: {
    maximizedPost: PostData;
    setMaximizedPost: Function;
}) {
    if (!props.maximizedPost) return <></>;

    useEffect(() => {
        const listener = (event) => {
            if (event.code == "Escape") {
                props.setMaximizedPost(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => window.removeEventListener("keydown", listener);
    }, []);

    const { postId, imageUrl, title } = props.maximizedPost;

    return (
        <div className="fixed inset-0 bg-gray-500">
            <Post postId={postId} imageUrl={imageUrl} title={title} />
        </div>
    );
}
export default MaximizedPost;
