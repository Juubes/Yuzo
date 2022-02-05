import PostIcons from "@components/post/PostIcons";
import Image from "next/image";
import * as React from "react";
import CommentSection from "../CommentSection";
import PostData from "./PostData";
import settings from "src/images/settings.webp";

function Post(props: PostData) {
    const { postId, imageUrl, title, onClick } = props;

    return (
        <div
            className=" bg-red-500 m-2 p-2 rounded"
            onClick={onClick}
        >
            <div className="">hello1</div>
            <div className="">
                <Image
                    objectFit="fill"
                    layout="responsive"
                    width={100}
                    height={100}
                    src={imageUrl}
                    alt="post"
                    className="m-0"
                />
            </div>
            <div className="">hello2</div>

            {/* <h3 className="">{title}</h3>
            <PostIcons postId={postId} />
            <hr className="" />
            <CommentSection postId={postId} /> */}
        </div>
    );
}
export default Post;
