import { useGlobalState } from "src/contexts/GlobalStateProvider";
import MaximizedPost from "./post/MaximizedPost";
import Post from "./post/Post";

function Feed(props) {
    const { posts } = props;
    const { maximizedPost, setMaximizedPost } = useGlobalState();

    return (
        <div className="">
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
        </div>
    );
}
export default Feed;
