import express from "express";
import cors from "cors";
import "dotenv/config";

import emailRoute from "./routes/email.js";

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());

app.use("/send-email", emailRoute);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
