import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import indexRoutes from "./routes/index.routes.js";

//Funtions
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", indexRoutes);



app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });

  export default app;