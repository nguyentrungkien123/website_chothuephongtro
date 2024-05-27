import db from "../models/index";

export const getAllCategory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed at category",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
