import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

const List = ({categoryCode}) => {
  console.log(categoryCode)
  const dispatch = useDispatch();
  // const [params] = useSearchParams();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    let params = []
    for(let entry of searchParams.entries()){
      params.push(entry)
    }
    let searchParamObject = {}
    params?.map(i=>{
      searchParamObject = {...searchParamObject,[i[0]]:i[1]}
    })
    if(categoryCode)  searchParamObject.categoryCode = categoryCode
    console.log(searchParamObject)
    dispatch(getPostsLimit(searchParamObject));
  }, [searchParams,categoryCode]);
  return (
    <div className="w-full border bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-semibold">Danh sách tin đăng</h3>
        <span>Cập nhật: 20:30 19/04/2024</span>
      </div>
      <div className="flex items-center gap-2 my-2 text-sm">
        <span className="px-3">Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text="Mới nhất" />
        <Button bgColor="bg-gray-200" text="Tin đăng" />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                user={item?.user}
                title={item?.title}
                id={item?.id}
              />
            );
          })}
      </div>
      
    </div>
  );
};

export default List;
