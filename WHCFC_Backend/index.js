import express from "express";
import cors from "cors";
import "dotenv/config";
import emailRoute from "./routes/email.js";
import dotenv from "dotenv";

// Load environment variables
const env = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
dotenv.config({ path: env });

const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/send-email", emailRoute);

app.listen(port, async () => {
  console.log("Server is running on port: " + port);
});
