import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ContactImage from '../assets/contact.png'
import Button from '../components/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Contact = () => {
  return (
    <section className='py-[128px]'>
        <Container>
            <Flex>
                <div className='w-1/2 relative overflow-hidden group'>
                <Image className='w-full h-full' src={ContactImage}/>
                <div className='w-full h-full bg-[#1c1e5380] group-hover:left-0 duration-500  absolute top-0 -left-[100%] py-[96px] px-[96px]'>
                    <h2 className='text-[54px] text-white font-semibold font-pop w-[376px]'>Building stellar websites for early startups</h2>
                    <p className='text-base text-white font-normal font-pop w-[376px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                </div>
                <div className='w-1/2 py-[96px] px-[96px] bg-[#1C1E53] relative'>
                <h2 className='text-[32px] text-white font-pop font-medium'>Send inquiry</h2>
                <p className='text-base text-white font-pop font-normal pt-4 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <input className='w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-[#ffffff80]  placeholder:text-[#F4F6FC] placeholder:text-lg text-white ' type="text" placeholder='Your Name'/>
                <input className='w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-[#ffffff80]  placeholder:text-[#F4F6FC] placeholder:text-lg text-white ' type="text" placeholder='Email'/>
                <input className='w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-[#ffffff80]  placeholder:text-[#F4F6FC] placeholder:text-lg text-white ' type="text" placeholder='Paste your Figma design URL'/>
              <Button className='w-full mt-5' text='Send an Inquiry'/>
              <div className='group text-white text-lg font-pop font-medium flex items-center absolute bottom-[40px] left-[50%] -translate-x-1/2'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[180px] opacity-0 group-hover:opacity-100'/></div>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Contact