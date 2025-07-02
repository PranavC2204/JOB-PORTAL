import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import * as Sentry from "@sentry/node";

// initialize express
const app = express();

// ✅ Attach Sentry request/tracing handlers (only if defined)
if (Sentry.Handlers && typeof Sentry.Handlers.requestHandler === "function") {
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler?.());
}

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => res.send("API working ✅"));

// 🔥 Sentry error test
app.get("/sentry-debug", () => {
  throw new Error("🔥 Sentry test error triggered!");
});

// ✅ Sentry error handler (must come after routes)
if (Sentry.Handlers && typeof Sentry.Handlers.errorHandler === "function") {
  app.use(Sentry.Handlers.errorHandler());
}

// port
const PORT = process.env.PORT || 5000;

// connect DB and start server
const startServer = async () => {
  await connectDB();

  const Video = mongoose.model("Video", new mongoose.Schema({
    title: String,
    createdAt: { type: Date, default: Date.now },
  }));

  await Video.create({ title: "Initial test video" });

  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
};

startServer();
