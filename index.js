import express from "express";
import noteRouter from "./routes/note.js";
import "dotenv/config";
import mongoose from "mongoose";

const connectionString = process.env.MONGO_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 7076;

// use routes
app.use(express.json());

app.use(noteRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
