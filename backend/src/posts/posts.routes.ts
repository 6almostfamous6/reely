import { Router } from 'express';
import { pool } from '../db';
import { requireAuth } from '../auth/auth.middleware';
import { requireAdmin } from '../auth/admin.middleware';

const router = Router();

// Create post
router.post('/', requireAuth, async (req: any, res) => {
  const { content } = req.body;

  if (!content || content.length > 280) {
    return res.status(400).json({ error: 'Invalid post content' });
  }

  const result = await pool.query(
    `INSERT INTO posts (user_id, content)
     VALUES ($1, $2)
     RETURNING *`,
    [req.user.id, content]
  );

  req.io?.emit('timeline:new-post', result.rows[0]);
  res.json(result.rows[0]);
});

// Get timeline
router.get('/', async (_req, res) => {
  const result = await pool.query(
    `SELECT posts.*, users.handle
     FROM posts
     JOIN users ON users.id = posts.user_id
     ORDER BY posts.created_at DESC
     LIMIT 20`
  );

  res.json(result.rows);
});

// Admin delete post
router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  await pool.query(`DELETE FROM posts WHERE id = $1`, [req.params.id]);
  res.json({ success: true });
});

export default router;
