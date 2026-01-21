import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Timeline from "../components/Timeline";

const BACKEND_URL = "https://reely-production.up.railway.app";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return (
    <div className="feed-page">
      <h1 className="logo">Reely</h1>

      <CreatePost
        backendUrl={BACKEND_URL}
        onPostCreated={() => {
          fetch(`${BACKEND_URL}/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
        }}
      />

      <Timeline posts={posts} />
    </div>
  );
}
