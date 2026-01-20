import { Request, Response } from "express";
import { createRoom, getRoom, updateRoom } from "./rooms.store";

export const createRoomHandler = (req: Request, res: Response) => {
  const { videoUrl } = req.body;
  if (!videoUrl) return res.status(400).json({ error: "videoUrl required" });

  const room = createRoom(videoUrl);
  res.json(room);
};

export const getRoomHandler = (req: Request, res: Response) => {
  const room = getRoom(req.params.id);
  if (!room) return res.status(404).json({ error: "Room not found" });
  res.json(room);
};

export const updateRoomHandler = (req: Request, res: Response) => {
  const room = updateRoom(req.params.id, req.body);
  if (!room) return res.status(404).json({ error: "Room not found" });
  res.json(room);
};

