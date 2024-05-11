import React from "react";
import { SearchItem } from "../../components";
import icons from "../../ultils/icons";

const { IoIosArrowForward, FaLocationDot, RiMoneyDollarCircleLine, BiArea,BsHouse,CiSearch } =
  icons;

const Search = () => {
  return (
    <div className="p-[10px] w-4/5 my-3 bg-[#febb02] rounded-lg md:flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem IconBefore={<BsHouse/>} fontWeight IconAfter={<IoIosArrowForward />} text="Phòng trọ,nhà trọ" />
      <SearchItem IconBefore={<FaLocationDot/>}  IconAfter={<IoIosArrowForward />} text="Toàn quốc" />
      <SearchItem IconBefore={<RiMoneyDollarCircleLine/>} IconAfter={<IoIosArrowForward />} text="Chọn giá" />
      <SearchItem IconBefore={<BiArea/>} IconAfter={<IoIosArrowForward />} text="Chọn diện tích" />
      <button type="button" className="outline-none py-2 px-4 md:w-full w-[150px] bg-secondery1 text-[14.3px] rounded-md flex items-center justify-center gap-2 text-gray-100 font-medium">
        <CiSearch/> 
        Tìm kiếm</button>
    </div>
  );
};

export default Search;
