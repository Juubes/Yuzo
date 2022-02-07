import PostIcons from "@components/post/PostIcons";
import { useAuth } from "@contexts/AuthProvider";
import { useGlobalState } from "@contexts/GlobalStateProvider";
import Image from "next/image";
import * as React from "react";
import CommentSection from "../CommentSection";
import CommentingField from "./CommentingField";

function Post(props: PostData) {
    const { postId, imageUrl, imageWidth, imageHeight, imageTitle, comments } =
        props;

    const { setMaximizedPost } = useGlobalState();

    const [userCommenting, setUserCommenting] = React.useState(false);
    const auth = useAuth();

    return (
        <div className="color-secondary m-2 my-5 px-4 pt-3 rounded border-4 border-red-900 shadow-lg">
            <div className="relative w-full">
                <Image
                    onClick={() => {
                        setMaximizedPost(this);
                    }}
                    layout="responsive"
                    objectFit="contain"
                    width={imageWidth}
                    height={imageHeight}
                    src={imageUrl}
                    alt="post"
                />
            </div>
            <h3 className="text-3xl py-3 font-bold color-secondary">
                {imageTitle}
            </h3>
            <PostIcons
                className=""
                postId={postId}
                onComment={() => {
                    if (auth.user) setUserCommenting(true);
                    else {
                        // TODO: tell user to login
                    }
                }}
                onLike={() => {}}
                onShare={() => {}}
            />
            {comments && <hr className="p-2" />}

            {userCommenting && (
                <CommentingField
                    closeCommenting={() => setUserCommenting(false)}
                />
            )}

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
