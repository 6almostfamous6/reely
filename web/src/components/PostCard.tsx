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
import '../styles/feed.css';

export default function PostCard({ post }: any) {
  return (
    <div className="post-card">
      <div className="post-header">
        @{post.handle}
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-actions">
        <span>Like</span>
        <span>Comment</span>
        <span>Share</span>
      </div>
    </div>
  );
}
