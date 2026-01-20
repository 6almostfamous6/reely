import { Router } from "express";
import {
  createRoomHandler,
  getRoomHandler,
  updateRoomHandler
} from "./rooms.controller";

const router = Router();

router.post("/", createRoomHandler);
router.get("/:id", getRoomHandler);
router.patch("/:id", updateRoomHandler);

export default router;

