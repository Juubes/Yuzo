import MaximizedPost from "./MaximizedPost";
import Post from "./Post";

function Feed(props) {
    const { posts, maximizedPost, setMaximizedPost } = props;

    return (
        <>
            {posts.length == 0 ? (
                <div id="feed-placeholder"></div>
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
            {maximizedPost && (
                <MaximizedPost
                    maximizedPost={maximizedPost}
                    setMaximizedPost={setMaximizedPost}
                />
            )}
        </>
    );
}
export default Feed;
