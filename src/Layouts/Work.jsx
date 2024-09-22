import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import CardWord from '../components/CardWord'
import Icon1 from '../assets/workIcon1.png'
import Icon2 from '../assets/workIcon2.png'
import Icon3 from '../assets/workIcon3.png'
import Icon4 from '../assets/workIcon4.png'

const Work = () => {
  return (
    <section className='py-[128px] bg-[#F4F6FC]'>
        <Container>
            <Flex>
                <div className='w-5/12 relative'>
                 <h2 className='text-5xl text-[#282938] font-pop font-medium'>How we work</h2>
                 <p className='text-base text-[#282938] font-pop font-normal w-[405px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                 <div className='group text-[#2405F2] text-lg font-pop font-medium flex items-center absolute top-[140px] left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[200px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='w-7/12'>
               <Flex className='flex-wrap gap-y-[48px]'>
               <CardWord icon={Icon1} title="Strategy" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWord icon={Icon2} title="Wireframing" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWord icon={Icon3} title="Design" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWord icon={Icon4} title="Development" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
               </Flex>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Work