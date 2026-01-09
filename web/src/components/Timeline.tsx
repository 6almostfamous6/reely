import { useEffect, useState } from 'react';
import { apiFetch } from '../api/client';
import { PostCard } from './PostCard';

export function Timeline() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/posts')
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading feed...</div>;

  return (
    <div className="timeline">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
