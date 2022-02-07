import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function PostIcons({ postId, className, onLike, onComment, onShare }) {
    const likePost = {};

    return (
        <div className={`flex gap-3 w-1/3 h-full justify-center ${className}`}>
            <button className="w-1/3">
                <Image src={likeIcon} alt="like" onClick={onLike} />
            </button>
            <button className="w-1/3">
                <Image src={commentIcon} alt="comment" onClick={onComment} />
            </button>
            <button className="w-1/3">
                <Image src={shareIcon} alt="share" onClick={onShare} />
            </button>
        </div>
    );
}

export default PostIcons;
