import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import indexRouter from "./routes/index.js";
import bandsRouter from "./routes/bands.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/bands", bandsRouter);
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));