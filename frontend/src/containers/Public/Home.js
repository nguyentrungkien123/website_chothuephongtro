import React, { useEffect } from 'react'
import Header from "./Header"
import { Outlet,useLocation} from "react-router-dom"
import Navigation from "./Navigation";
import Search from "./Search"
import { useSelector,useDispatch } from 'react-redux';

import * as actions from "../../store/actions";

import { Intro,Contact } from "../../components"
import { path } from '../../ultils/constant';

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth)
  const location = useLocation();

  useEffect(()=>{
    setTimeout(()=>{
      isLoggedIn && dispatch(actions.getCurrent())
    },1000)
  },[isLoggedIn])
  
  // console.log(location.pathname);

  return (
    <div className='w-full flex gap-6 flex-col items-center m-auto h-full'>
      <Header />
         <Navigation/>
           { !location.pathname?.includes(path.DETAIL) &&  <Search/>}
      <div className='md:w-4/5 lg:w-4/5 flex flex-col items-start justify-start mt-3'>
         <Outlet />
      </div>
      <Intro/>
      <Contact/>
      <div className='h-[500px]'>

      </div>
    </div>
  )
}

export default Home
