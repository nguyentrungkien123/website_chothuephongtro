import React,{memo} from 'react'
import anonAvatar from "../assets/non-avatar.png"
import icons from '../ultils/icons'
import {Button} from "../components"
const { GoDotFill,FaPhone,SiZalo } = icons;

const BoxInfo = ({userData}) => {
  return (
    <div className='w-full bg-yellow-400 rounded-md flex flex-col items-center p-4 gap-4'>
      <img src={anonAvatar} alt='avatar' className='w-16 h-16 object-contain rounded-full'/>
      <h3 className='font-medium text-xl'>{userData?.name}</h3>
      <span className='flex items-center justify-center'>
      <GoDotFill color='green'/> 
        <span>Đang hoạt động</span>
      </span>
      <a href='tel:0948733302' className='text-white font-bold text-lg bg-[#13BB7B] w-full p-2 rounded-md flex  items-center justify-center gap-2'><FaPhone/>{userData?.phone}</a>
      <a href={`https://zalo.me/${userData?.zalo}`} className='text-black font-bold text-lg bg-white w-full p-2 rounded-md flex  items-center justify-center gap-2'><SiZalo size={35}/></a>
    </div>
  )
}

export default memo(BoxInfo)
