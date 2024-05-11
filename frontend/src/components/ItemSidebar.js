import React, { memo } from "react";
import icons from "../ultils/icons";

const { SlArrowRight } = icons;

const ItemSidebar = ({ title, content, isDouble }) => {
  const formatContent = () => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0);
    const evenEl = content?.filter((item, index) => index % 2 === 0);
    const formatContent = oddEl?.map((item, index) => {
      return {
        right: item,
        left: evenEl?.find((item2, index2) => index2 === index),
      };
    });
    return formatContent;
  };
  return (
    <div className="p-4 rounded-md bg-white w-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      {!isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            content.map((item) => {
              return (
                <div
                  key={item.code}
                  className="flex gap-2 items-center cursor-pointer border-b border-gray-200 pb-1 border-dashed"
                >
                  <SlArrowRight size={10} />
                  <p className="text-[16.3px] text-gray-500  hover:text-orange-600">
                    {item.value}
                  </p>
                </div>
              );
            })}
        </div>
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            formatContent(content).map((item,index) => {
              return (
                <div key={index}>
                  <div className="flex items-center justify-around">
                    <div className="flex flex-1 gap-2 items-center cursor-pointer border-b border-gray-200 pb-1 border-dashed">
                      <SlArrowRight size={10} />
                      <p className="text-[16.3px] text-gray-500  hover:text-orange-600">
                        {item.left.value}
                      </p>
                    </div>
                    <div className="flex flex-1 gap-2 items-center cursor-pointer border-b border-gray-200 pb-1 border-dashed">
                      <SlArrowRight size={10} />
                      <p className="text-[16.3px] text-gray-500  hover:text-orange-600">
                        {item.right.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
