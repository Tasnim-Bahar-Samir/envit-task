import React from 'react'
import img1 from '../../../images/about/img1.jpeg'
import img2 from '../../../images/about/img2.webp'
const About = () => {
  return (
    <div className=' my-24 md:px-24 mb-44 p-2'>
        <h3 className='text-center text-3xl font-bold text-orange-600'>About</h3>
        <h2 className='text-center text-4xl mb-5'>Let's know about us</h2>
        <div className='relative flex gap-3 flex-col md:flex-row justify-between items-center'>
        <div className='md:pl-24 md:w-1/2'
        >
            <img className='w-96' src={img2} alt="" />
            <img className='w-96 absolute top-28 left-5 mb-20' src={img1} alt="" />
        </div>
        <div className='md:w-1/2 md:mt-24 mt-44'
        >
            <p>We are a volunteer flatform. We work for helpless people. We collect donation and make plan according to our collection. And help poor people from the donation. By getting more donation from you we believe that we can help more people. And our mission is to be part of all the helpless people.</p>
        </div>
        
    </div>
    </div>
  )
}

export default About