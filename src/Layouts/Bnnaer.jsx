import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImage from '../assets/banner.png'
import Button from '../components/Button'
import Image from '../components/Image'
import { FaArrowRightLong } from "react-icons/fa6";

const Bnnaer = () => {
  return (
    <section className='bg-[#1C1E53] py-[200px]'>
        <Container>
            <Flex>
                <div className='w-[50%]'>
                    <h1 className='text-[54px] text-white font-pop font-semibold'>Building stellar websites for early startups</h1>
                    <p className='text-base text-white font-pop font-normal w-[562px] pt-6 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                    <div className='flex relative'>
                    <Button text='View our work'/>
                     <div className='group text-white flex items-center absolute top-[16px] left-[255px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <Image src={BannerImage}/>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Bnnaer