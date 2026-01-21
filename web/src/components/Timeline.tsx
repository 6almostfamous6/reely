import { useEffect, useState } from "react";

const BACKEND_URL = "https://YOUR-RAILWAY-URL";

type Post = {
  id: number;
  content: string;
  created_at: string;
};

export default function Timeline() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;

  if (posts.length === 0) {
    return <p className="empty-feed">No posts yet.</p>;
  }

  return (
    <div className="timeline">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <div className="post-content">{post.content}</div>
          <div className="post-date">
            {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
