import PostIcons from "@components/post/PostIcons";
import Image from "next/image";
import * as React from "react";
import CommentSection from "../CommentSection";
import PostData from "./PostData";

function Post(props: PostData) {
    const { postId, imageUrl, title, onClick, comments } = props;

    return (
        <div className="color-secondary m-2 p-2 rounded" onClick={onClick}>
            <Image
                layout="responsive"
                width={100}
                height={100}
                src={imageUrl}
                alt="post"
            />
            <h3 className="text-xl font-bold color-secondary">{title}</h3>
            <PostIcons postId={postId} />
            {comments && <hr />}
            <CommentSection comments={comments} />
        </div>
    );
}
export default Post;
