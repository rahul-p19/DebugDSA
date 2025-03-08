import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const corsOptions = {
  origin: ["http://localhost:8081"],
  optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));

app.listen(process.env.PORT, () => {
  console.log(`${new Date().toLocaleString()} - Server listening at http://localhost:${process.env.PORT}`)
})
