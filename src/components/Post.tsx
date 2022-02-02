import PostIcons from "@components/PostIcons";
import Image from "next/image";
import * as React from "react";
import CommentSection from "./CommentSection";
import PostData from "./PostData";

function Post(props: PostData) {
    const { postId, imageUrl, title, onClick } = props;

    return (
        <div
            className="my-10 flex justify-center bg-orange-400 p-5 rounded-lg"
            onClick={onClick}
        >
            <div>
                {props.template ? (
                    <div style={{ width: "600px", height: "600px" }} />
                ) : (
                    <Image width="600px" height="600px" src={imageUrl} alt="post" />
                )}
                <h3 className="text-3xl py-3 font-semibold w-min">{title}</h3>
                <PostIcons postId={postId} />
                <hr className="border-black"></hr>
                <CommentSection postId={postId} />
            </div>
        </div>
    );
}
export default Post;
