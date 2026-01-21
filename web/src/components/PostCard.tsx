type Post = {
  id: number;
  content: string;
  created_at: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="post-card">
      <div className="post-content">{post.content}</div>
      <div className="post-date">
        {new Date(post.created_at).toLocaleString()}
      </div>
    </div>
  );
}
