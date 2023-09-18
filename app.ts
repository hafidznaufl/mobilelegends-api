import express from "express";
import router from "./routes/api";
import connectToDatabase from "./config/database";
import dotenv from "dotenv";
import { handleInvalidEndpoint } from "./middleware/auth";

dotenv.config();

const app = express();

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(handleInvalidEndpoint)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
