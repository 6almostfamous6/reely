import PostCard from "./PostCard";

type Post = {
  id: number;
  content: string;
  created_at: string;
};

export default function Timeline({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="timeline">
        <p className="empty-feed">No posts yet. Be the first to post!</p>
      </div>
    );
  }

  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
