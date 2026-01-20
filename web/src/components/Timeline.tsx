import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const API_URL = "BACKEND_URL_HERE";

type Post = {
  id: number;
  author: string;
  content: string;
};

export default function Timeline() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/posts`)
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
}
