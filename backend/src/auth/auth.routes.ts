import { Router } from 'express';
import { pool } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

function signToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
}

// REGISTER
router.post('/register', async (req, res) => {
  const { email, password, handle } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users (email, password_hash, handle)
     VALUES ($1, $2, $3)
     RETURNING id, handle, role`,
    [email, passwordHash, handle]
  );

  const user = result.rows[0];

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  res.json({ token, user });
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  const user = result.rows[0];
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  res.json({
    token,
    user: { id: user.id, handle: user.handle, role: user.role },
  });
});

export default router;
