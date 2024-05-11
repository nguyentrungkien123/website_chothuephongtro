import express from "express";
import * as controllers from "../controllers"

const route = express.Router();

route.get("/all",controllers.getAllAreas)

module.exports = route;