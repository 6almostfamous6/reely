import { useEffect, useState } from 'react';
import { api } from '../api/client';
import PostCard from './PostCard';

export default function Timeline() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    api<any[]>('/posts').then(setPosts);
  }, []);

  return (
    <div className="timeline">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
