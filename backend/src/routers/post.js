import express from "express";
import * as controllers from "../controllers"

const route = express.Router();

route.get("/all",controllers.getPosts)
route.get("/limit",controllers.getLimitPost)

module.exports = route;