export function PostCard({ post }: { post: any }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <strong>@{post.handle}</strong>
        <span className="post-date">
          {new Date(post.created_at).toLocaleString()}
        </span>
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-actions">
        <button>👍 Like</button>
        <button>💬 Comment</button>
      </div>
    </div>
  );
}
