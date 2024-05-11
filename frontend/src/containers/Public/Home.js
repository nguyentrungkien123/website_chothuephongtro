import React, { useEffect } from 'react'
import Header from "./Header"
import { Outlet} from "react-router-dom"
import Navigation from "./Navigation";
import Search from "./Search"
import { useSelector,useDispatch } from 'react-redux';

import * as actions from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(()=>{
    setTimeout(()=>{
      isLoggedIn && dispatch(actions.getCurrent())
    },1000)
  },[isLoggedIn])
  
  return (
    <div className='w-full flex flex-col items-center m-auto h-full'>
      <Header />
         <Navigation/>
         {isLoggedIn && <Search/>}
      <div className='md:w-4/5 lg:w-4/5 flex flex-col items-start justify-start mt-3'>
         <Outlet />
      </div>
    </div>
  )
}

export default Home
