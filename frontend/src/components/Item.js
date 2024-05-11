import React, { memo, useState } from "react";
import icons from "../ultils/icons";
import { useNavigate,Link } from "react-router-dom";
import {formatVietnameseToString} from "../ultils/Common/formatVietnameseToString";

// const images = [
//   "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/04/06/anh-3_1712411342.jpg",
//   "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/04/06/anh-tong-the_1712411279.jpg",
//   "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/07/19/1_1689728328.jpg",
//   "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/02/05/1_1644023811.jpg",
// ];

const { GoStarFill, CiHeart, IoMdHeart, BsFillBookmarkStarFill } = icons;
// const indexs = [0, 1, 2, 3];

const Item = ({
  images,
  address,
  attributes,
  description,
  star,
  user,
  title,
  id
}) => {
  const addressLength = address.split(',').length
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const navigate = useNavigate();
  const handleStar = (star) => {
    let stars = []
    for(let i = 1;i<=+star;i++){
       stars.push(<GoStarFill className="star-item" size={20} color="yellow" />)
    }
    return stars
  }
  // console.log(handleStar(5))
  return (
    <div className="w-full flex border-t border-orange-600 p-2">
      <Link to={`chi-tiet/${formatVietnameseToString(title)}/${id}`} className="w-2/5 flex gap-[2px] flex-wrap items-center relative cursor-pointer">
        <img
          src={images[0]}
          alt="preview"
          className="w-full h-[350px] object-cover rounded-md"
        />

        <span className="text-[14.3px] bg-overlay-70 text-white px-1 rounded-md absolute left-1 bottom-1">
          {`${images.length} ảnh`}
        </span>
        <span
          className="text-lg text-white absolute right-3 bottom-1"
          onMouseEnter={() => {
            setIsHoverHeart(true);
          }}
          onMouseLeave={() => {
            setIsHoverHeart(false);
          }}
        >
          {isHoverHeart ? (
            <IoMdHeart size={24} color="red" />
          ) : (
            <CiHeart size={24} />
          )}
        </span>
      </Link>
      {/* <div className="flex gap-1">
        </div> */}

      <div className="w-3/5 px-2">
        <div className="flex items-star justify-between w-full">
          <div className="text-red-500 font-medium">
            {handleStar(+star).length > 0 && handleStar(+star).map((star,number)=>{
              return (
                <span key={number}>{star}</span>
              )
            })}
            {title}
          </div>
          <div className="w-[10%] flex justify-center">
            <BsFillBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[16.3px] my-2 px-[2px] whitespace-nowrap overflow-hidden text-ellipsis gap-2">
          <span className="font-semibold text-green-600 flex-3">
            {attributes?.price}
          </span>
          <span className="flex-1">{attributes?.acreage}</span>
          <span className="flex-3">{`${address.split(',')[addressLength-2]},${address.split(',')[addressLength-1]}`}</span>
        </div>
        <p className="text-gray-500 text-[14.3px] w-full h-[100px] text-ellipsis overflow-hidden p-2">
          {description}
        </p>
        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="user.png"
              alt="user"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p className="ml-2 text-[15.3px] text-gray-400">{user?.name}</p>
          </div>
          <div className="flex items-center text-[15.3px] mr-1">
            <button
              type="button"
              className="bg-blue-700 px-2 rounded-md mr-[3px] text-white"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              type="button"
              className="text-blue-700 px-2 border border-blue-600 rounded-md"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
