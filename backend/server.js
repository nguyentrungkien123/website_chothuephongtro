import express from "express";
import cors from "cors";
const app = express();
require("dotenv").config();
import initRoutes from "./src/routers";
require("./src/config/connectdatabase");
import { getNumberFromString } from "./src/utils/common";

console.log(getNumberFromString('jdsahgcjsdgc6 dskhfdj3'));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

initRoutes(app);

const PORT = process.env.PORT || 8080;

const listener = app.listen(PORT, () => {
  console.log("Server is running on port " + listener.address().port);
});
