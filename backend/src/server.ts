import './db';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Reely backend is running');
});

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log(`Server running on port ${4000}`);
});
