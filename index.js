import mongoose from "mongoose";
import itemsRouter from "./route.js";
import express from "express";

const app = express();
app.use(express.json());

app.use("/api/items", itemsRouter);

const PORT = 8080;
const MONGO_URI =
  "mongodb+srv://avijit7278:ioxhNKIK3HYtOa40@cluster0.cpnivem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, { dbName: "CRUD" })
  .then((data) => {
    console.log(`Connected to DB: ${data.connection.host}`);
  })
  .catch((err) => {
    throw err;
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
