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
