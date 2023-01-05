import React from 'react'
import img1 from '../../../images/about/img1.jpeg'
import img2 from '../../../images/about/img2.webp'
const About = () => {
  return (
    <div className=' my-24 md:px-24 mb-44 p-2'>
        <h3 className='text-center text-3xl font-bold text-orange-600'>About</h3>
        <h2 className='text-center text-4xl mb-5'>Let's know about us</h2>
        <div className='relative flex flex-col md:flex-row justify-between items-center'>
        <div className='md:pl-24 md:w-1/2'
        >
            <img className='w-96' src={img2} alt="" />
            <img className='w-96 absolute top-28 left-5 mb-20' src={img1} alt="" />
        </div>
        <div className='md:w-1/2 md:mt-24 mt-44'
        >
            <p>A photographer capture the life.I had started photographing as a fassionate way.Now im a professional photographer, videographer and editor also.I do all these thing from my heart.I have done a lot of projects.I always love to do these things.</p>
        </div>
        
    </div>
    </div>
  )
}

export default About