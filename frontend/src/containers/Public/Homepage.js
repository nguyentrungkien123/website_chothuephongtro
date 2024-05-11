import React, {useEffect} from "react";
// import {Search} from './index'
import { text } from "../../ultils/constant";
// import { ProvinceBtn } from '../../components'
// import { location } from '../../ultils/constant'
import Province from "../../components/Province";
import List from "./List";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { ItemSidebar } from "../../components";
import { useSelector,useDispatch } from "react-redux";
import * as actions from "../../store/actions"
// VIDEO 16 .....
const Homepage = () => {
  const [params] = useSearchParams()
  const { categories,prices} = useSelector(state => state.app)
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(actions.getPrices())
  },[])
  console.log(prices)
  return (
    <div className="border w-full border-red-500 flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List page={params.get('page')}/>
          <Pagination page={params.get('page')}/>
        </div>
        <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title={'Danh sách cho thuê'}/>
          <ItemSidebar content={prices} title={'Xem theo giá'}/>
          <ItemSidebar title={'Xem theo diện tích'}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
