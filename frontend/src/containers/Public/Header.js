import React, { useCallback, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import menuManage from "../../ultils/menuManage";

const { CiCirclePlus } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [SearchParams] = useSearchParams();
  const { currentData } = useSelector((state) => state.user);
  const headerRef = useRef();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: flag });
  }, []);
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [SearchParams.get("page")]);
  return (
    <div ref={headerRef} className="w-4/5">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Phongtro123.com xin chào !</small>
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-1 relative">
              <small>{currentData.name}</small>
              <Button
                text={"Quản lý tài khoản"}
                textColor="text-white"
                bgColor="bg-blue-700"
                onClick={() => dispatch(actions.logout())}
                px='px-4'
              />
              <div className="absolute min-w-200 top-full right-0 p-4 bg-white shadow-md rounded-md flex flex-col gap-2">
                {menuManage.map((item) => {
                  return (
                    <Link className=" hover:text-orange-500 text-blue-500 border-b border-gray-200 py-1" key={item.id} to={item?.path}>
                      {item.text}
                    </Link>
                  );
                })}
                <span className="cursor-pointer hover:text-orange-500 text-blue-500 py-1" onClick={() => dispatch(actions.logout())}>Đăng xuất</span>
              </div>
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-secondery2"
            IcAfter={CiCirclePlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
