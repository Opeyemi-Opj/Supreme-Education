import React from 'react'
import Image1 from '../../assets/images/image7(1).png'
import Image2 from '../../assets/images/image85.png'
import Image3 from '../../assets/images/Image(23).png'
import Image4 from '../../assets/images/Image(24).png'
import Image5 from '../../assets/images/Image(25).png'
import { Link } from 'react-router-dom'; // ✅ Correct Import
import Arrowlft from '../../assets/images/arrow-left.png'
import Mapl from '../../assets/images/Map-location-marker.png'


const Cocurricularactivities = () => {
return (
<div className='max-w-full'>

<img src={Image1} alt='Our Founder' className='w-full' />

<p className='text-center font-cormorant text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-tight mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-130px]'>
Co-curricular Activities
</p>

<div className="flex flex-wrap  px-4 sm:px-8 md:px-[5%] pt-[5%] pb-[3%] lg:pb-[2%] bg-[#F6F8F5] gap-3 sm:gap-6 md:gap-12 lg:gap-28 items-center text-center">

<Link to="/boarding-school" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Boarding School
</Link>

<p className='w-[250px] bg-[#DD3333] rounded-md font-raleway text-[#FFFFFF] text-[18px] font-medium leading-[21.13px] px-5 py-3 transition duration-300  '> Co-curricular Activities </p>

<Link to="/facilities" className="text-[#292D32] text-[16px] sm:text-[16px] font-medium border-b-2 border-transparent hover:text-[#DD3333] hover:border-[#DD3333] transition-all duration-300">
Facilities
</Link>

</div>

<div className='pl-[5%] pr-[5%]'>
<div className="flex flex-wrap gap-2 pt-7 pb-16 items-center text-center md:text-left">
<Link to="/" className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
HOME
</Link>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />

<p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px]">
STUDENT LIFE
</p>
<img src={Arrowlft} alt="" className="w-[14px] h-[14px]" />

<p className="font-raleway text-[#292D32] text-[14px] font-bold leading-[16.44px] text-center md:text-left">
CO-CURRICULAR-ACTIVITIES
</p>
</div>


<div className="flex flex-col md:flex-row gap-6">
{/* First Column - Larger */}
<div className="w-full md:w-[65%] bg-white">

<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px]'>Our students are given the opportunity to nurture, utilize and improve upon their talents in areas other than academics.<br/><span className='block mt-[7%]'></span>Clubs available include:</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 px-[5%]">
{/* Second Column - Smaller */}
<div className="w-full md:w-[35%] bg-white">
<div className="">

<div className='flex items-center gap-4 mt-5 mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  JETS
  </p>
</div>

<div className='flex items-center gap-4  mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  ICT
  </p>
</div>

<div className='flex items-center gap-4  mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  Math
  </p>
</div>

<div className='flex items-center gap-4  mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  Literary & Debating
  </p>
</div>

<div className='flex items-center gap-4  mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  Chef
  </p>
</div>

<div className='flex items-center gap-4  mb-3 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  Board games
  </p>
</div>

<div className='flex items-center gap-4  mb-6 '>
  <img src={Mapl} alt="" className="w-[40px] h-[40px]" />
  <p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[21.13px]'>
  amongst others
  </p>
</div>
</div>
</div>

{/* First Column - Larger */}
<div className="w-full md:w-[65%] p-4">
<img src={Image2} alt='/' className='w-full h-[393px] rounded-md' />
</div>
</div>

<div className=' px-[5%] mt-[4%]'>
<p className='font-raleway text-[#292D32] text-[18px] font-medium leading-[40px] pr-[40%]'>We provide Coding and Robotics classes for our students in order to equip them for the ever developing world of technology.
There are several opportunities for field trips within and outside Nigeria to enable students explore wider horizons that impact their learning.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-[5%] mb-[6%]">
{/* Column 1 */}
<div className=" rounded-md flex items-center justify-center">
<img src={Image3} alt="/" className="/" />
</div>

{/* Column 2 */}
<div className=" rounded-md flex items-center justify-center">
<img src={Image4} alt="/" className="/" />
</div>

{/* Column 3 */}
<div className=" rounded-md flex items-center justify-center">
<img src={Image5} alt="/" className="w-full" />
</div>
</div>


</div>
)
}

export default Cocurricularactivities
