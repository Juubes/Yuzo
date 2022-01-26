import * as React from "react";
import Image from "next/image";
import likeIcon from "@images/like.png";
import commentIcon from "@images/comment.png";
import shareIcon from "@images/share.png";

function Post(props) {
    if (props.template)
        return (
            <div className="m-20 bg-orange-400 p-7 rounded-lg">
                <div style={{ width: "600px", height: "600px" }}></div>
                <div>
                    <h3 className="text-3xl py-3 font-semibold"></h3>
                    <Icons id={props.imageId} />
                </div>
            </div>
        );
    return (
        <div className="m-20 bg-orange-400 p-7 rounded-lg">
            <Image width="600px" height="600px" src={props.imageUrl} />
            <div>
                <h3 className="text-3xl py-3 font-semibold">
                    {props.imageTitle}
                </h3>
                <Icons id={props.imageId} />
            </div>
        </div>
    );
}

function Icons(props) {
    return (
        <div className="flex gap-3">
            <Image width="50px" height="50px" src={likeIcon} />
            <Image width="50px" height="50px" src={commentIcon} />
            <Image width="50px" height="50px" src={shareIcon} />
        </div>
    );
}

export default Post;
