import express from "express";
import morgan from "morgan";
import multer from "multer";
import { join, extname } from "node:path";
import { uuid } from "yutil.js";
import router from "./routes/routes";
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: join(__dirname + "/public/uploads"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, uuid.v2(16) + extname(file.originalname));
  },
});
app.use(multer({ storage }).single("file"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
app.use(router);

// Static Files
app.use(express.static(join(__dirname, "public")));

// Server listening
app.listen(app.get("port"), () => {
  console.clear();
  console.log(`CDN on port: ${app.get("port")}`);
});
