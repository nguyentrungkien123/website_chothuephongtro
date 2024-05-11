import authRoute from "./auth";
import insertRoute from "./insert";
import userRoute from "./user";
import categoryRote from "./category";
import postRoute from "./post";
import usePrices from "./price";

const initRoute = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/insert", insertRoute);
  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/post", postRoute);
  app.use("/api/v1/category", categoryRote);
  app.use("/api/v1/price", usePrices);
  app.use("/", (req, res, next) => {
    res.send("Hello Word!");
  });
};

module.exports = initRoute;
