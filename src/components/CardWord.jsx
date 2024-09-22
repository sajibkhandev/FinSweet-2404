import React from 'react'
import Image from '../components/Image'


const CardWord = ({icon,title,dec}) => {
  return (
    <div className=''>
        <Image src={icon}/>
        <h3 className='text-[36px] text-[#282938] font-pop font-medium pt-4 pb-2'>{title}</h3>
        <p className='text-base text-[#282938] font-pop font-normal w-[303px]'>{dec}</p>
    </div>
  )
}

export default CardWord