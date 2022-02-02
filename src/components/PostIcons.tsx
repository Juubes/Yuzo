import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function PostIcons(props: { postId: string }) {
    return (
        <div className="flex gap-3 py-5">
            <Image width="50px" height="50px" src={likeIcon} alt="like" />
            <Image width="50px" height="50px" src={commentIcon} alt="comment" />
            <Image width="50px" height="50px" src={shareIcon} alt="share" />
        </div>
    );
}

export default PostIcons;
