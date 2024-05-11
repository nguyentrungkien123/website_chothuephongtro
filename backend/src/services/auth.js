import db from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
require("dotenv").config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ name, password, phone }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: v4(),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );

        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng ký tài khoản thành công' : 'Số điện thoại đã được sử dụng',
            token: token ? token : null
        })
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ password, phone }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw:true,
      });

      const isCorrectPassword = response && bcrypt.compareSync(password,response.password); 
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );

        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng nhập tài khoản thành công !' : response ?  'Mật khẩu đã nhập không chính xác !' : 'Tài khoản chưa được đăng kí !',
            token: token ? token : null
        })
    } catch (error) {
      reject(error);
    }
  });
