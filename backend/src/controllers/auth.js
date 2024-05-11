import * as services from "../services";

export const register = async (req, res, next) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password) {
      return res.status(404).json({
        err: 1,
        msg: "Thông tin yêu câu chưa đầy đủ ! Vui lòng kiểm tra lại các trường yêu cầu",
      });
    }
    const response = await services.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Lỗi tại auth controller do lỗi " + error,
    });
  }
};

export const login = async (req, res, next) => {
  const { phone, password } = req.body;
  try {
    if (!phone || !password) {
      return res.status(404).json({
        err: 1,
        msg: "Thông tin yêu câu chưa đầy đủ ! Vui lòng kiểm tra lại các trường yêu cầu",
      });
    }
    const response = await services.loginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Lỗi tại auth controller do lỗi " + error,
    });
  }
};