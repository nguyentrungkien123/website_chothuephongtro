import express from "express";
import * as controllers from "../controllers"
const route = express.Router();
route.post('/',controllers.insert)

module.exports = route;
