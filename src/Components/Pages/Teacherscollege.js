import React from 'react'
import Image1 from '../../assets/images/image83.png'
import Image2 from '../../assets/images/Image(15).png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Mapl from '../../assets/images/Map-location-marker.png'
import Arrowlft from '../../assets/images/arrow-left.png'
import Downloadb from '../../assets/images/download.png'

const Teacherscollege = () => {

  return (
<div className='max-w-full'>
<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Teachers College
</p>

<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-16 items-center text-center">

<Link to="/eyfs" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
EYFS
</Link>

<Link to="/junior-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Junior School
</Link>

<Link to="/high-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
High School
</Link>

<p className='w-[200px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '>Teachers College</p>

<Link to="/academic-calendar" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Academic Calendar
</Link>

<Link to="/school-curriculum" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
School Curriculum
</Link>
</div>

<div className='pl-[5%] pr-[5%] pb-[5%]'>
<div className='flex gap-2 pt-7 pb-16 items-center'>
<Link to='/' className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> HOME</Link>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> ACADEMICS </p>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />
<p className='font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]'> TEACHERS COLLEGE </p>
</div>

<div className="flex flex-col md:flex-row gap-6 p">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40xp]'> Our Early Years Foundation Stage is designed for children from three months to five years old, providing a structured approach to early childhood education. We focus on seven key areas of learning and development:</p>
<h2 className='font-raleway text-[#006011] text-[34px] font-semibold leading-[40px] mt-12 mb-12'><h2 className='font-raleway text-[#006011] text-[34px] font-semibold leading-[40px]'>Our Services</h2></h2>
<div className='flex items-center gap-4 mt-5 mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
Training and Workshop
</p>
</div>

<div className='flex items-center gap-4  mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
Learning Camp
</p>
</div>

<div className='flex items-center gap-4  mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
Curriculum Development
</p>
</div>

<div className='flex items-center gap-4  mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
Summer Retreat
</p>
</div>

<div className='flex items-center gap-4  mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
Strategic Planning & Implementation
</p>
</div>

<div className='flex items-center gap-4  mb-3 '>
<img src={Mapl} alt="" className="w-[40px] h-[40px]" />
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
SEF Family Enrichment Programme
</p>
</div>

<div className="flex mt-10">
  <button className="flex items-center gap-4 bg-[#006011] text-white px-6 py-3 rounded-md hover:bg-[#004d0d] transition-all font-raleway text-[16px] font-medium leading-[18.78px]">
    <img src={Downloadb} alt="Download Icon" className="w-[24px] h-[24px]" />
    <span>Download Training Calendar</span>
  </button>
</div>
</div>
    
    {/* Second Column - Smaller */}
    <div className="w-full md:w-[35%] p-4">
    <img src={Image2} alt='/' className='' />
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Teacherscollege
