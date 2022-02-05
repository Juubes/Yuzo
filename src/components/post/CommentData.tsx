export default class CommentData {
    postId: string;
    username: string;
    comment: string;
    timestamp: Long;
    replies = [];
}
