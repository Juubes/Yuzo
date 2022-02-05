import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function PostIcons(props: { postId: string }) {
    return (
        <div className="flex gap-3 py-5 w-5 relative">
            <Image
                layout="fill"
                src={likeIcon}
                alt="like"
                className="bg-cover"
            />
            <Image
                layout="fill"
                src={commentIcon}
                alt="comment"
                className="bg-cover"
            />
            <Image
                layout="fill"
                src={shareIcon}
                alt="share"
                className="bg-cover"
            />
        </div>
    );
}

export default PostIcons;
