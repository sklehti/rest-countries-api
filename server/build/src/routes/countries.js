"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const countryService_1 = __importDefault(require("../services/countryService"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(countryService_1.default.getEntries());
});
router.get("/regions", (_req, res) => {
    res.send(countryService_1.default.getAllRegion());
});
router.get("/:name", (req, res) => {
    try {
        const country = countryService_1.default.findByName(req.params.name);
        res.send(country);
    }
    catch (error) {
        const errorMessage = "Something went wrong";
        res.status(404).send(errorMessage);
    }
});
router.get("/border/:alpha3Code", (req, res) => {
    try {
        const country = countryService_1.default.findBorderCountry(req.params.alpha3Code);
        res.send(country);
    }
    catch (error) {
        const errorMessage = "Something went wrong";
        res.status(404).send(errorMessage);
    }
});
exports.default = router;
