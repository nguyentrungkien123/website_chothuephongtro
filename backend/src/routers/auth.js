import express from "express";

const route = express.Router();

import * as controllers from "../controllers";

route.post("/register", controllers.register);
route.post("/login", controllers.login);

module.exports = route;
