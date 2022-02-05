import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function PostIcons({ postId, className }) {
    return (
        <div className={`flex gap-3 w-1/3 h-full justify-center ${className}`}>
            <button className="w-1/3">
                <Image src={likeIcon} alt="like" />
            </button>
            <button className="w-1/3">
                <Image src={commentIcon} alt="comment" />
            </button>
            <button className="w-1/3">
                <Image src={shareIcon} alt="share" />
            </button>
        </div>
    );
}

export default PostIcons;
