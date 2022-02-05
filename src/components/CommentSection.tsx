import { howLongAgo } from "@util/timeutil";
import * as React from "react";
import CommentData from "./post/CommentData";

function CommentSection({ className, comments }) {
    if (!comments) return <></>;
    return (
        <div className={`text-sm pt-4 px-2 ${className}`}>
            {comments?.map((comment) => (
                <Comment
                    key={(comment.username, comment.timestamp)}
                    user={comment.username}
                    comment={comment.comment}
                    timestamp={comment.timestamp}
                    replies={comment.replies}
                />
            ))}
        </div>
    );
}

function Comment(props) {
    const commentTime = howLongAgo(props.timestamp);

    return (
        <div className="my-1">
            {/* Comment */}
            {props.user}: {props.comment}
            <span className="text-gray-600 opacity-70"> {commentTime}</span>
            <div>
                {props.replies.map((reply) => {
                    const replyTime = howLongAgo(reply.timestamp);
                    return (
                        <div
                            key={reply.username + reply.timestamp}
                            className="ml-6 mb-2"
                        >
                            {/*Replies*/}
                            {reply.username}: {reply.comment}{" "}
                            <span className="text-gray-600">{replyTime}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CommentSection;
