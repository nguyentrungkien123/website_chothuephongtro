import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const notActive =
  "w-[46px] h-[48px] flex justify-center items-center px-[18px] py-[15px] bg-white hover:bg-gray-300 hover:text-white rounded-md";
const Active =
  "w-[46px] h-[48px] flex justify-center items-center px-[18px] py-[15px] bg-[#E13427] text-white hover:opacity-90 rounded-md cursor-pointer";

const PageNumber = ({ text, currentPage, icon, setCurrentPage, type }) => {
  const navigate = useNavigate();
  const handdleChangePage = () => {
    if (!(text === "...")) {
      setCurrentPage(+text);
      navigate({
        pathname: "/",
        search: createSearchParams({
          page: text,
        }).toString(),
      });
    }
  };
  return (
    <div
      className={
        +text === +currentPage
          ? Active
          : `${notActive} ${text === "..." ? "cursor-text" : "cursor-pointer"}`
      }
      onClick={handdleChangePage}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
