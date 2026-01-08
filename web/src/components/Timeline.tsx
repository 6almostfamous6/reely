import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

interface Post {
  id: string;
  content: string;
  handle?: string;
  created_at: string;
}

export default function Timeline() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Loading feed...</p>;
  }

  return (
    <div>
      {posts.length === 0 && (
        <p style={{ textAlign: 'center' }}>
          No posts yet. Be the first 👋
        </p>
      )}

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
