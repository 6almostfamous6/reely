const BACKEND_URL = "reely-production.up.railway.app";

import CreatePost from "../components/CreatePost";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="feed-page">
      <h1 className="logo">Reely</h1>
      <CreatePost />
      <Timeline />
    </div>
  );
}
const createRoom = async () => {
  const res = await fetch(`${BACKEND}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    })
  });

  const room = await res.json();
  window.location.href = `/room/${room.id}`;
};
