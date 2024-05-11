import express from "express";

const route = express.Router();
import * as controllers from "../controllers"

route.get("/all",controllers.getCategory)

module.exports = route;