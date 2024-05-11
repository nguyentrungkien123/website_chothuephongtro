import React, { memo } from "react";
import icons from "../ultils/icons";

const { SlArrowRight } = icons;

const ItemSidebar = ({ title, content, isDouble }) => {
  // const formatContent = () => {
  //   const formatedContent = content.length > 0 && content.map((item,index)=>{
  //         return {
  //           left: ,
  //           right: ,
  //         }
  //    })
  // }
  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      {!isDouble && <div className="flex flex-col gap-2">
        {content?.length > 0 &&
          content.map(item => {
            return (
              <div key={item.code} className="flex gap-2 items-center cursor-pointer border-b border-gray-200 pb-1 border-dashed">
                <SlArrowRight size={10} />
                <p className="text-[16.3px] text-gray-500  hover:text-orange-600" >{item.value}</p>
              </div>
            );
          })}
      </div>}
      {isDouble && <div className="flex flex-col gap-2">
        {content?.length > 0 &&
          content.map(item => {
            return (
              <div key={item.code} className="flex gap-2 items-center cursor-pointer border-b border-gray-200 pb-1 border-dashed">
                <SlArrowRight size={10} />
                <p className="text-[16.3px] text-gray-500  hover:text-orange-600" >{item.value}</p>
              </div>
            );
          })}
      </div>}
    </div>
  );
};

export default memo(ItemSidebar);
