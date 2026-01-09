import express from 'express';
import cors from 'cors';

import authRoutes from './auth/auth.routes';
import postsRoutes from './posts/posts.routes';
import roomsRoutes from './rooms/rooms.routes';

export function createApp(io?: any) {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Attach Socket.IO to requests
  app.use((req: any, _res, next) => {
    req.io = io;
    next();
  });

  // Routes
  app.use('/auth', authRoutes);
  app.use('/posts', postsRoutes);
  app.use('/rooms', roomsRoutes);

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
