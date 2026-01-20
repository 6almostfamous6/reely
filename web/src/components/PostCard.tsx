type Props = {
  author: string;
  content: string;
};

export default function PostCard({ author, content }: Props) {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar" />
        <strong>{author}</strong>
      </div>

      <p>{content}</p>

      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}
