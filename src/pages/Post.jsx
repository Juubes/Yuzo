import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function Post(props) {
    return (
        <div className="m-20">
            <Image width="600px" height="600px" src={props.imageUrl} />
            <div>
                <h3 className="text-lg">{props.imageTitle}</h3>
                <Icons id={props.imageId} />
            </div>
        </div>
    );
}

function Icons(props) {
    return (
        <div>
            <Image width="50px" height="50px" src={likeIcon} />
            <Image width="50px" height="50px" src={commentIcon} />
            <Image width="50px" height="50px" src={shareIcon} />
        </div>
    );
}

export default Post;
