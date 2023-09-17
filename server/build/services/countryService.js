"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data/data"));
const getEntries = () => {
    return data_1.default;
};
const findByName = (name) => {
    const country = data_1.default.find((n) => n.name === name);
    return country;
};
const getAllRegion = () => {
    const regions = data_1.default.map(({ region }) => region);
    const filtered = regions.filter((region, index) => regions.indexOf(region) === index);
    const sortedRegions = filtered.sort();
    return sortedRegions;
};
const findBorderCountry = (alpha3Code) => {
    const country = data_1.default.find((a) => a.alpha3Code === alpha3Code);
    return country;
};
exports.default = {
    getEntries,
    getAllRegion,
    findBorderCountry,
    findByName,
};
