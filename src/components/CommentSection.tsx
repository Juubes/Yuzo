import { howLongAgo } from "@util/timeutil";
import * as React from "react";

const TESTING_COMMENTS = [
    {
        username: "Jussi",
        comment: "Nice 5/5",
        timestamp: 1159352399574,
        replies: []
    },
    {
        username: "Jaakob",
        comment: "Kaunis",
        timestamp: 1259352399574,
        replies: []
    },
    {
        username: "Onni",
        comment: "Mä pelaan lolia",
        timestamp: 1643499118300,
        replies: [
            {
                username: "Juho",
                comment: "Et sä osaa",
                timestamp: 1643489118300
            }
        ]
    },
    {
        username: "Jorma",
        comment: "Iha ok mut onks OG",
        timestamp: 1559352399574,
        replies: []
    }
].sort((d, d2) => d2.timestamp - d.timestamp);

function CommentSection(props: { postId: string }) {
    return (
        <div className="pt-4 px-2">
            {TESTING_COMMENTS.map((comment) => (
                <Comment
                    key={comment.username + comment.timestamp}
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
