import React from 'react'

const List = () => {
  return (
    <ul className='flex gap-x-8 text-base font-mediu font-pop'>
        <li className='text-primary duration-300 hover:text-white'>Home</li>
        <li className='text-primary duration-300 hover:text-white'>About us</li>
        <li className='text-primary duration-300 hover:text-white'>Features</li>
        <li className='text-primary duration-300 hover:text-white'>Pricing</li>
        <li className='text-primary duration-300 hover:text-white'>FAQ</li>
        <li className='text-primary duration-300 hover:text-white'>Blog</li>
    </ul>
  )
}

export default List