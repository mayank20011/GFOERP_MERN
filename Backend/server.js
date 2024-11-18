import express from "express";
import dotenv from "dotenv";
import clientRouter from "./Routes/Clients.js";
import salesRouter from "./Routes/Sales.js";
import purchaseRouter from "./Routes/Purchase.js";
import ProductRouter from "./Routes/Products.js";
import "./config/db.js";
import cors from "cors";

// resolving cors error
server.use(
  cors({
    origin: "https://gfoerp-mern-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// where to look config file
dotenv.config({ path: "./config/config.env" });

// Accessing port from the config File
const PORT = process.env.PORT || 5000;

// initializing server
const server = express();

// for testing server
server.get("/", (req, res) => {
  res.send("Server Running Perfectly Fine");
});

// applying middleware
server.use(express.json());
server.use("/Sales", salesRouter);
server.use("/Purchase", purchaseRouter);
server.use("/Client", clientRouter);
server.use("/Products", ProductRouter);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
