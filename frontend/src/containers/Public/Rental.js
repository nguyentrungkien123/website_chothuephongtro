import React,{useEffect,useState} from 'react'
import { text } from "../../ultils/constant";
// import { ProvinceBtn } from '../../components'
// import { location } from '../../ultils/constant'
import Province from "../../components/Province";
import List from "./List";
import Pagination from "./Pagination";
// import { useSearchParams } from "react-router-dom";
import { ItemSidebar } from "../../components";
import { useSelector,useDispatch } from "react-redux";
// import * as actions from "../../store/actions"
import { useLocation } from 'react-router-dom';
import { formatVietnameseToString } from "../../ultils/Common/formatVietnameseToString";

const Rental = () => {
  const { prices,areas,categories} = useSelector(state => state.app)
  // const dispatch = useDispatch();
  const [categoryCurrent,setCategoryCurrent] = useState('')
  const [categoryCode,setCategoryCode] = useState('none')
  const location = useLocation();
 const dispatch = useDispatch();
  
  useEffect(()=>{
    const category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === location.pathname);
    setCategoryCurrent(category)
    if(category){
      setCategoryCode(category.code);
    }
    // console.log(category.value);
  },[location])

  // useEffect(()=>{
  //   dispatch(actions.getPostsLimit())
  // },[location])
  //  console.log(categoryCode);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <p className="text-base text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={categoryCode}/>
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar isDouble={true} type='priceCode' content={prices} title={'Xem theo giá'}/>
          <ItemSidebar isDouble={true} type='areaCode' content={areas} title={'Xem theo diện tích'}/>
        </div>
      </div>
    </div>
  )
}

export default Rental
