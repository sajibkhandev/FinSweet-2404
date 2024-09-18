import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-transparent hover:bg-[#FCD980]  duration-300 border-2 border-[#3E406D] py-4 px-12 rounded-[40px] text-base text-white font-pop font-meduim'>{text}</button>
  )
}

export default Button