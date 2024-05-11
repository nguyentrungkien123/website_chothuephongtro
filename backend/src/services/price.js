import db from "../models";

export const getPricesSerVice = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ["code", "value", "order"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed get all",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
