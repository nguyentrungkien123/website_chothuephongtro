import express from "express";

import * as controllers from "../controllers"
import verifyToken from "../middlewares/verifyToken";

const route = express.Router();

route.use(verifyToken)
route.get('/get-current',controllers.getCurrent)

module.exports = route;