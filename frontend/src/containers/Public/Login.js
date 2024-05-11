import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(location?.state);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    name: "",
    password: "",
  });
  useEffect(() => {
    setIsRegister(location?.state);
  }, [location?.state]);
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);
  useEffect(() => {
    msg && Swal.fire("Oops!", msg, "error");
  }, [msg]);
  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0) {
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
    }
    //  VIDEO 12 .....
  };
  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    // console.log(fields);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này !",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự !",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ !",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] m-auto p-[30px] pb-[100px] rounded-md shadow-sm">
        <h3 className="font-semibold flex items-center justify-center text-2xl mb-3">
          {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
        </h3>
        <div className="w-full flex flex-col gap-5">
          {isRegister && (
            <InputForm
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              label="HỌ TÊN"
              value={payload.name}
              setValue={setPayload}
              keyPayload={"name"}
            />
          )}
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label="SỐ ĐIỆN THOẠI"
            value={payload.phone}
            setValue={setPayload}
            keyPayload={"phone"}
          />
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label="MẬT KHẨU"
            value={payload.password}
            setValue={setPayload}
            keyPayload={"password"}
            type="password"
          />
          <Button
            text={isRegister ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
            bgColor="bg-secondery1"
            textColor="text-white"
            fullWidth
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-7 flex items-center justify-between">
          {isRegister ? (
            <small>
              Bạn đã có tài khoản ?{" "}
              <span
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => {
                  setIsRegister(false);
                  setPayload({
                    phone: "",
                    name: "",
                    password: "",
                  });
                }}
              >
                Đăng nhập ngay
              </span>
            </small>
          ) : (
            <>
              <small className="text-[blue] hover:text-[red] cursor-pointer">
                Bạn quên mật khẩu ?
              </small>
              <small
                className="text-[blue] hover:text-[red] cursor-pointer"
                onClick={() => {
                  setIsRegister(true);
                  setPayload({
                    phone: "",
                    name: "",
                    password: "",
                  });
                }}
              >
                Tạo tài khoản mới
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
