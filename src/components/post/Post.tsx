import PostIcons from "@components/post/PostIcons";
import Image from "next/image";
import * as React from "react";
import CommentSection from "../CommentSection";

function Post(props: PostData) {
    const {
        postId,
        imageUrl,
        imageWidth,
        imageHeight,
        imageTitle,
        onClick,
        comments
    } = props;

    return (
        <div
            className="color-secondary m-2 px-4 pt-3 rounded"
            onClick={onClick}
        >
            <div className="relative w-full">
                <Image
                    objectFit="contain"
                    width={imageWidth}
                    height={imageHeight}
                    src={imageUrl}
                    alt="post"
                />
            </div>
            <h3 className="text-xl font-bold color-secondary">{imageTitle}</h3>
            <PostIcons className="" postId={postId} />
            {comments && <hr />}
            <CommentSection className="pb-4" comments={comments} />
        </div>
    );
}
export default Post;

class PostData {
    postId: string;
    imageUrl: string;
    imageTitle: string;
    imageWidth: number;
    imageHeight: number;
    template?: boolean;
    onClick?: any;
    comments: CommentData[];
}
class CommentData {
    postId: string;
    username: string;
    comment: string;
    timestamp: Long;
    replies = [];
}
