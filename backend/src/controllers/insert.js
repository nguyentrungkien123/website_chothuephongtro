import * as services from "../services";

export const insert = async (req, res, next) => {
  try {
    const response = await services.insertService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Lỗi tại auth controller do lỗi " + error,
    });
  }
};