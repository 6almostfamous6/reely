import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

type Post = {
  id: number;
  author: string;
  content: string;
};

export default function Timeline() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://your-backend-url.up.railway.app/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="timeline">
      {posts.map((post) => (
        <PostCard key={post.id} author={post.author} content={post.content} />
      ))}
    </div>
  );
}
