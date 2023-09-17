import express from "express";
import cors from "cors";
import "dotenv/config";
import countryRouter from "./routes/countries";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./build"));

app.use("/api/countries", countryRouter);

app.get("/test", (_req, res) => {
  res.send("The test works correctly.");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
