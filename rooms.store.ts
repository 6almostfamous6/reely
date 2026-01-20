type Room = {
  id: string;
  videoUrl: string;
  isPlaying: boolean;
  timestamp: number;
};

const rooms = new Map<string, Room>();

export function createRoom(videoUrl: string): Room {
  const room: Room = {
    id: crypto.randomUUID(),
    videoUrl,
    isPlaying: false,
    timestamp: 0
  };
  rooms.set(room.id, room);
  return room;
}

export function getRoom(id: string) {
  return rooms.get(id);
}

export function updateRoom(id: string, data: Partial<Room>) {
  const room = rooms.get(id);
  if (!room) return null;
  Object.assign(room, data);
  return room;
}

