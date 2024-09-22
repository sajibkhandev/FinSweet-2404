import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { FaArrowRightLong } from 'react-icons/fa6'

import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

const Project = () => {
  return (
    <section className='py-p128'>
        <Container>
            <Flex className='justify-between'>
                <h2 className='text-[#282938] text-5xl font-pop font-semibold'>View our projects</h2>
                <Flex className='items-center gap-x-4'>
                <h6 className='text-base text-[#282938] font-pop font-meduim'>View More</h6>
                <FaArrowRightLong/>

                </Flex>
                    

                
            </Flex>

            <Flex className='pt-14 '>
                <div className='w-8/12 relative group/main'>
                <Image src={Project1}/>
                <div className='w-[0%] pt-[312px] px-12 hidden group-hover/main:block group-hover/main:w-[52%]  h-full bg-gradient-to-r from-[#7683A8] to-[#1C1E53] opacity-85 absolute top-0 left-0'>
                  <h4 className='text-white text-2xl font-pop font-semibold w-[313px] pb-6'>Workhub office Webflow Webflow Design</h4>
                  <p className='text-white text-base font-pop font-normal w-[313px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga </p>
                  <div className='group/pain text-[#FCD980] flex items-center absolute top-[480px] left-[48px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover/pain:opacity-100'/></div>
                  
                  
                </div>
                </div>
                <div className='w-4/12 flex flex-col items-center justify-between'>
                <Image src={Project2}/>
                <Image src={Project3}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Project