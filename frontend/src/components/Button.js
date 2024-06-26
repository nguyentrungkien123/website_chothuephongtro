import React, { memo } from "react";

const Button = ({ text, textColor, bgColor, IcAfter, IcBefore, onClick, fullWidth,px }) => {
  return (
    <div>
      <button
        type="button"
        className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${
          fullWidth && "w-full"
        } outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
        onClick={onClick}
      >
        <span>{IcBefore && <IcBefore />}</span>
        <span>{text}</span>
        <span>{IcAfter && <IcAfter />}</span>
      </button>
    </div>
  );
};

export default memo(Button);
