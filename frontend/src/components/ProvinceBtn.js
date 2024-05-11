import React,{memo} from 'react'
// import { location } from '../ultils/constant'

const ProvinceBtn = ({name,image}) => {
  return (
    <div className='shadow-md rounded-bl-md rounded-br-md text-blue-700 cursor-pointer hover:text-orange-500'>
      <img 
      src={image}
      alt={name}
      className='w-[230px] h-[110px] object-cover rounded-tl-md rounded-tr-md'
      />
      <div className='text-sm font-medium p-2 text-center'>{name}</div>
    </div>
  )
}

export default memo(ProvinceBtn)
