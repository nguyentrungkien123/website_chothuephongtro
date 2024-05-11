import React, { memo } from "react";

const SearchItem = ({ IconBefore, IconAfter, text, fontWeight }) => {
  return (
    <div className="bg-white py-2 px-4 md:w-full w-[200px] rounded-md text-gray-400 text-[13.3px] gap-2 flex items-center justify-between">
      <div className="flex items-center gap-2 w-full">
        {IconBefore}
        <span className={`${fontWeight && "font-medium text-black"} w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
      </div>
      {IconAfter}
    </div>
  );
};

export default memo(SearchItem);
