import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import List from '../components/List'

const Foter = () => {
  return (
    <>
    <section className='bg-[#1C1E53] py-[96px]'>
        <Container>
            <Flex>
                <div className='w-1/2 relative'>
                <Image src={Logo}/>
                <p className='w-[399px] text-base text-white font-pop font-normal pt-[28px]'>We are always open to discuss your project and improve your online presence.</p>
                <div className='w-[517px] h-[96px] bg-[#FCD980] absolute -bottom-[96px] left-0'>
                    <Flex className='justify-evenly items-center h-full'>
                        <div>
                            <h4>Email me at</h4>
                            <p>contact@website.com</p>
                        </div>
                        <div>
                            <h4>Call us</h4>
                            <p>0927 6277 28525</p>
                        </div>
                    </Flex>
                </div>
                </div>
                <div className='w-1/2'>
                <h2 className='text-[48px] text-white font-pop font-semibold'>Lets Talk!</h2>
                <p className='w-[399px] text-base text-white font-pop font-normal pb-5 pt-[22px]'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>

                <ul className='text-white flex gap-x-4'>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram />
                    </li>
                    <li><FaLinkedinIn />
                    </li>
                    <li><FaTwitter />
                    </li>
                </ul>
                </div>

            </Flex>
            
        </Container>
    </section>
    <section className='py-8'>
        <Container>
            <Flex>
                <div className='w-8/12'>
                <p>Copyright 2022, Finsweet.com</p>
                </div>
                <div className='w-4/12'>
                <List/>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Foter