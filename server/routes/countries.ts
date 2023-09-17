import express from "express";
import countryService from "../services/countryService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(countryService.getEntries());
});

router.get("/regions", (_req, res) => {
  res.send(countryService.getAllRegion());
});

router.get("/:name", (req, res) => {
  try {
    const country = countryService.findByName(req.params.name);

    res.send(country);
  } catch (error: unknown) {
    const errorMessage = "Something went wrong";

    res.status(404).send(errorMessage);
  }
});

router.get("/border/:alpha3Code", (req, res) => {
  try {
    const country = countryService.findBorderCountry(req.params.alpha3Code);

    res.send(country);
  } catch (error: unknown) {
    const errorMessage = "Something went wrong";

    res.status(404).send(errorMessage);
  }
});
export default router;
