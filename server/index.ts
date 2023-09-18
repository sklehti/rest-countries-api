import express from "express";
import cors from "cors";
import "dotenv/config";
import countryRouter from "./routes/countries";
import * as url from "url";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api/countries", countryRouter);

const PORT = process.env.PORT || 3001;

app.set("trust proxy", function (ip: string) {
  if (ip === "127.0.0.1") return false;
  else return true;
});

app.get("/*", (req, res) => {
  res.redirect(
    url.format({
      protocol: req.protocol,
      host: req.get("host"),
    })
  );
});

app.get("/test", (_req, res) => {
  res.send("The test works correctly.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
