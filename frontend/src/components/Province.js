import React from 'react'
import ProvinceBtn from './ProvinceBtn'
import { location } from '../ultils/constant'

const Province = () => {
  return (
    <div className='flex items-center justify-center gap-5 py-5'>
      {location.map((item)=>{
                  return (
                    <ProvinceBtn
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    />
                  )
             })}
    </div>
  )
}

export default Province
