import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

