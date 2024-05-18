import express from "express";
import cors from "cors";
const app = express();
require("dotenv").config();
import initRoutes from "./src/routers";
require("./src/config/connectdatabase");
// giúp server đọc dữ liệu từ client dạng form body
app.use(
  express.urlencoded({
    extended: true,
  })
);
// server chuyển các dạng dữ liệu về json
app.use(express.json());
// giúp kết nối server với client thông qua cổng kết nối,với các phương thức
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

// cổng router ,tạo các api cho client
initRoutes(app);

const PORT = process.env.PORT || 8080;

const listener = app.listen(PORT, () => {
  console.log("Server is running on port " + listener.address().port);
});
