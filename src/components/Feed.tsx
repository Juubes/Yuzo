import { useGlobalState } from "src/contexts/StateProvider";
import MaximizedPost from "./MaximizedPost";
import Post from "./Post";

function Feed(props) {
    const { posts } = props;
    const { maximizedPost, setMaximizedPost } = useGlobalState();

    return (
        <>
            {posts.length == 0 ? (
                <div id="feed-placeholder">Loading feed</div>
            ) : (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        postId={post.id}
                        imageUrl={post.imageUrl}
                        title={post.imageTitle}
                        onClick={() => {
                            setMaximizedPost(post);
                        }}
                    />
                ))
            )}
            {maximizedPost && <MaximizedPost />}
        </>
    );
}
export default Feed;
