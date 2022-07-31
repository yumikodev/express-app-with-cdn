import express from "express";
import morgan from "morgan";
import { join } from "node:path";
import router from "./routes/routes";
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Files
app.use(express.static(join(__dirname, "public")));

// Routes
app.use(router);

// Server listening
app.listen(app.get("port"), () => {
  console.clear();
  console.log(`Server on port: ${app.get("port")}`);
});
