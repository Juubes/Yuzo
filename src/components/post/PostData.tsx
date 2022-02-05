import CommentData from "./CommentData";

export default class PostData {
    postId: string;
    imageUrl: string;
    title: string;
    template?: boolean;
    onClick?: any;
    comments: CommentData[];
}