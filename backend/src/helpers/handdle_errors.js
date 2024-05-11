import createError from "http-errors";

export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status).json({
    err: 1,
    msg: error.message,
  });
};

export const internalServerError = (res) => {
  const error = createError.InternalServerError();
  return res.status(error.status).json({
    err: 0,
    msg: error.message,
  });
};

export const notFound = (req, res) => {
  const error = createError.NotFound('Không tìm thấy địa chỉ');
  return res.status(error.status).json({
    err: 0,
    msg: error.message,
  });
};
