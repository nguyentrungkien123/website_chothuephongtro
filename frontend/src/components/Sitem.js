import React from 'react'
import moment from "moment"
import 'moment/locale/vi'

const Sitem = ({title,price,image,createdAt}) => {
  return (
    <div className='w-full flex items-center gap-2 py-2 border-b border-gray-400'>
      <img src={image[0]}
       className='w-[65px] h-[65px] object-cover rounded-md flex-none'
      alt='photo'/>
      <div>
        <div className='flex flex-col flex-auto justify-between w-full gap-1'>
          <h4 className='text-blue-600 text-sm font-semibold'>{`${title?.slice(0,40) + '...'}`}</h4>
          <div className='flex w-full justify-between items-center'>
            <span className='font-medium text-green-500 text-[16px]'>{price}</span>
            <span className='text-gray-300 text-[16px]'>{moment(createdAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sitem
