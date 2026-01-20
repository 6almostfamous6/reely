import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BACKEND = "reely-production.up.railway.app";

export default function Room() {
  const { id } = useParams();
  const [room, setRoom] = useState<any>(null);

  useEffect(() => {
    fetch(`${BACKEND}/rooms/${id}`)
      .then(r => r.json())
      .then(setRoom);
  }, [id]);

  if (!room) return <p>Loading room...</p>;

  return (
    <div>
      <h2>Watch Room</h2>
      <video
        src={room.videoUrl}
        controls
        style={{ width: "100%" }}
      />
    </div>
  );
}
