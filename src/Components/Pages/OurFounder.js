import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Image1 from '../../assets/images/image7(1).png'
import Image2 from '../../assets/images/Image(7).png'
import  bg1  from '../../assets/images/Creed.png';
import  bg2  from '../../assets/images/Building-image.png';
import Arrowlft from '../../assets/images/arrow-left.png'

const OurFounder = () => {


 useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when page loads
  }, []);

  return (
    <div className='max-w-full'>
      <img src={Image1} alt='Our Founder' className='w-full' />
      
      <p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
        Our Founder
      </p>
      
      <div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">

      <p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Our Founder</p>
        
        <Link to="/our-ceo" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Our CEO
        </Link>
        
        <Link to="/who-we-are" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Who We Are
        </Link>
        
        <Link to="/virtual-tour" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Virtual Tour
        </Link>
        
        <Link to="/contact-us" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
          Contact Us
        </Link>
      </div>

      <div className='pl-[5%] pr-[5%] pb-[5%]'>
      <div className='flex gap-2 pt-7 pb-16 items-center'>
     <Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
     <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
      <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ABOUT US </p>
      <img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
      <p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> OUR FOUNDER </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p">
       {/* First Column - Larger */}
       <div className="w-full md:w-[65%] bg-white">
       <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> Supreme Education Foundation School started more as a movement than a traditional school. After twenty-five years of service with the West African Examinations Council, I yearned to provide a platform for children to go through secondary education with joy, ease, eagerness, and achieve great success. It was important to me that they were also cultured, have respect and love for themselves, their country and the fear of God.<br/><span className='block mt-5'></span>

On October 17, 1991, we opened our doors to thirteen (13) students – ten in JSS 1, two in JSS 2, and one in SS1. We started on our temporary site at 6, Celestial Church Street, Agidingbi, Ikeja. By the end of the first year, our enrolment had gone up to thirty (30) students and twenty-three (23) teachers. Our first set of students graduated in 1993. We moved to our permanent site at Emmanuel Keshi Street, Magodo GRA, Phase 2 in October 2001, with over two hundred (200) students. The school currently maintains a population of about eight hundred (800) students.<br/><span className='block mt-5'></span>

Our Junior School was established on our permanent site in 2007 because we realized that a supreme foundation needed to get started from early childhood. It has been over two decades of continuous improvement and refinement towards our vision of attaining the highest standards of excellence in academics and total development of our students. Our strength has been in the synergy of our school community – parents, students, staff, towards this common goal. We hold the fear of God as our most important core value, and we teach this to our students.<br/><span className='block mt-5'></span>

We have seen our students attain great feats in academics, sports, leadership, arts, and in their personal development. Our greatest sense of accomplishment has been in seeing our students flourish in their lives and careers after school. They have taken their places in contributing to change in Nigeria, and in every place they are located all over the world.
We have a commitment to keep innovating to ensure we provide a 21st century education that prepares our students for their future. We welcome you to join this vibrant community.</p>
        </div>

       {/* Second Column - Smaller */}
      <div className="w-full md:w-[35%] p-4">
      <img src={Image2} alt='/' className='' />
      <h2 className='font-raleway text-[#292D32] text-[22px] font-bold leading-[25.83xp] text-center'>MRS. A.A ADOMOLEKUN</h2>
      </div>
      </div>
      </div>


<div className="flex flex-col sm:flex-row gap-5 mb-[5%] px-[5%]">
  {/* Column 1 */}
  <div className="flex-1 min-h-[314px] rounded-md text-center grid place-items-center group overflow-hidden relative"
    style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

    {/* Content */}
    <div className="relative z-10 w-full px-5 flex flex-col items-center space-y-5 transition-transform duration-[1.2s] ease-in-out translate-y-[126%] group-hover:translate-y-0">
      <h2 className="font-cormorant text-white text-[40px] font-medium leading-[48.44px]">Who we are</h2>
      
      {/* Button */}
      <button className="flex mx-auto font-raleway text-white text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011]">
        Learn more
        <svg className="w-[31px] h-[8px] transition duration-300 fill-white group-hover:fill-[#006011]" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
          <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" />
        </svg>
      </button>
    </div>
  </div>

  {/* Column 2 */}
  <div className="flex-1 min-h-[314px] rounded-md text-center grid place-items-center group overflow-hidden relative"
    style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-[#00000066] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

    {/* Content */}
    <div className="relative z-10 w-full px-5 flex flex-col items-center space-y-5 transition-transform duration-[1.2s] ease-in-out translate-y-[126%] group-hover:translate-y-0">
      <h2 className="font-cormorant text-white text-[40px] font-medium leading-[48.44px]">Take a virtual Tour</h2>
      
      {/* Button */}
      <button className="flex mx-auto font-raleway text-white text-[14px] font-medium leading-[16.44px] 
        border border-[#C6C5C5] rounded-[8px] px-[25px] py-[15px] items-center gap-5 transition duration-300
        hover:bg-white hover:text-[#006011] hover:border-[#006011]">
        Learn more
        <svg className="w-[31px] h-[8px] transition duration-300 fill-white group-hover:fill-[#006011]" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 8">
          <path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" />
        </svg>
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default OurFounder
